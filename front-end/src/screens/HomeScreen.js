import React, { 
    // useContext,
    useEffect, 
    useReducer
} from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger'; // best debugger for state
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { FETCH_FAILED, FETCH_REQUEST, FETCH_SUCCESS } from '../types';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {...state, loading: true}; // keep current list and update only loading field
        case FETCH_SUCCESS:
            return {...state, products: action.payload, loading: false}
        case FETCH_FAILED:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export default function HomeScreen() {
    const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: ''
    });
    
    useEffect(() => {
      const fetchData = async () => {
        dispatch({type: FETCH_REQUEST});
        try {
            const result = await axios.get('/api/products');
            dispatch({type: FETCH_SUCCESS, payload: result.data});
        } catch (err) {
            dispatch({type: FETCH_FAILED, payload: err.message});
        }
      };
      fetchData();
    }, []);
    
    return (
        <div>
            <Helmet>
                <title>amazona</title>
            </Helmet>
            <h1>Featured Products:</h1>
            <div className='products'>
                {
                    loading ? <LoadingBox/>
                    :
                    error ? <MessageBox variant='danger'>{error}</MessageBox>
                    :

                    <Row>
                        {
                            products.map(product => (
                                <Col key={product.slug} sm={6} md={4} lg={3} className='mb-3'>
                                    <Product product={product} />
                                </Col>
                            ))
                        }
                    </Row>
                }
            </div>

        </div>
    )
}
