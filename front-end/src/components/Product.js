import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        // <div className='product' key={product.slug}>
        <Card>
        {/* <Card className='product' key={product.slug}> */}
            <Link to={`/product/${product.slug}`}>
                <img className='card-img-top' src={product.image} alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text>${product.price}</Card.Text>
                <Button>Add To Cart</Button>
            </Card.Body>
            {/* <div className='product-info'>
                <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                </Link>
                <p><strong>${product.price}</strong></p>
                <button>Add To Cart</button>
             </div> */}
        </Card>
    );
}
