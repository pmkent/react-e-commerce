import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

export default function HomeScreen() {
  return (
    <div>

        <h1>Featured Products:</h1>
        <div className='products'>
            {
                data.products.map(product => (
                <div className='product' key={product.slug}>
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                    {/* <a href={`/product/${product.slug}`}>
                        <img src={product.image} alt={product.name} />
                    </a> */}
                    <div className='product-info'>
                    <Link to={`/product/${product.slug}`}>
                        <p>{product.name}</p>
                    </Link>
                    {/* <a href={`/product/${product.slug}`}>
                        <p>{product.name}</p>
                    </a> */}
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
