import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
         .then(data=>setProducts(data))
    },[])
    const HandleAddTOCard=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart);
        
    }
    return (
        <div className='Shop-Container'>
            <div className='Product-Container'>
                {
                    products.map(product=> <Product
                     product={product}
                        key={product.id}
                        HandleAddTOCard={HandleAddTOCard}
                        
                        ></Product> )
                }
                
            </div>
            <div className='order-container'>
                <h4>Order Summary</h4>
                <p>selected item:{cart.length}</p>
                <p>Total Price:{cart.length}</p>
                </div>
        </div>
    );
};

export default Shop;