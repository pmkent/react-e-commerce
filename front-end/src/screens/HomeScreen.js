import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data';
import axios from 'axios';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
          const result = await axios.get('/api/products');
        //   const result = await axios.get('http://localhost:5000/api/products');
          setProducts(result.data);
      };
      fetchData();
    // //   console.log('%%%products >' + products + '<');
    //   console.log(products);
    // useEffect(() => {
    //     async function getProducts() {
    //         const response = await fetch('http://localhost:5000/api/products', {
    //             method: 'GET',
    //             headers: {
    //                 accept: 'application/json',
    //             },
    //         });

    //         const data2 = await response.json();
    //         setProducts(data2.results);
    //     };

    //     getProducts();
    }, []);
    
    return (
        <div>

            <h1>Featured Products:</h1>
            <div className='products'>

            {/* {products.length === 0 ? (<div className='cart cart-header'>Cart is empty</div>)
               :
               (<div className='cart cart-header'>
                   You have {products.length} in the cart {' '}
                </div>)
               } */}

                {
                    products.map(product => (
                    // data.products.map(product => (
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
