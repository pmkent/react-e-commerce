import React, { 
    useEffect, 
    useReducer,
    //  useState 
} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger'; // best debugger for state

export const ACTION = {
    FETCH_REQUEST: 'fetch-request',
    FETCH_SUCCESS: 'fetch-success',
    FETCH_FAIL: 'fetch-fail'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.FETCH_REQUEST:
            return {...state, loading: true}; // keep current list and update only loading field
        case ACTION.FETCH_SUCCESS:
            return {...state, products: action.payload, loading: false}
        case ACTION.FETCH_FAIL:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export default function HomeScreen() {
    // const [state, dispatch] = useReducer(first, second, third)
    const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: ''
    });
    // const [products, setProducts] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
          dispatch({type: ACTION.FETCH_REQUEST});
          try {
              const result = await axios.get('/api/products');
              dispatch({type: ACTION.FETCH_SUCCESS, payload: result.data});
          } catch (err) {
              dispatch({type: ACTION.FETCH_FAIL, payload: err.message});
          }
        //   const result = await axios.get('/api/products');
        //   setProducts(result.data);
      };
      fetchData();
    }, []);
    
    return (
        <div>
            <h1>Featured Products:</h1>
            <div className='products'>
                {
                    loading ? <div>Loading ... </div>
                    :
                    error ? <div>{error}</div>
                    :

                    products.map(product => (
                    <div className='product' key={product.slug}>
                        <Link to={`/product/${product.slug}`}>
                            <img src={product.image} alt={product.name} />
                        </Link>
                        <div className='product-info'>
                        <Link to={`/product/${product.slug}`}>
                            <p>{product.name}</p>
                        </Link>
                        <p><strong>${product.price}</strong></p>
                        <button>Add To Cart</button>
                        </div>
                    </div>
                    ))
                }
            </div>

        </div>
    )
}
