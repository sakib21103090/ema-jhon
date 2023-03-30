import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product);
    const {img,name,price,seller,ratings}=props.product;
    const HandleAddTOCard=props.HandleAddTOCard;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='c-product'>
            <h5>{name}</h5>
            <p>Price:${price}</p>
            <p> <small>Manufacturer:{seller}</small> </p>
            <p> <small>Rating: {ratings} star</small> </p>
            </div>
            <button onClick={()=>  HandleAddTOCard(props.product)}
             className='btn-style'> 
                Add to cart   
                <FontAwesomeIcon icon={faShoppingCart}/>
                 </button>
        </div>

    );
};

export default Product;