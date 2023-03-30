import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getShoppingCart} from '../utilities/fakedb';
import './Shop.css'


const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
         .then(data=>setProducts(data))
    },[]);
    useEffect(()=>{
const storedCart =getShoppingCart();
const saveCart=[];
// step 1 get id
for (const id in storedCart){
    // console.log(id);
    // get the id from product
    const addedProduct=products.find(product=>product.id===id);
    // step 3 get quantity by using id
    if(addedProduct){
        const quantity =storedCart[id];
    addedProduct.quantity=quantity;
  //step 4 added product add
    saveCart.push(addedProduct);
    }
}
// step 5 
setCart(saveCart);
    }  ,[products])
    
    const HandleAddTOCard=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart);
        addToDb(product.id);
        
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
            <div>
                <Cart
                cart={cart}
                
                ></Cart>
                
                
                </div>
        </div>
    );
};

export default Shop;