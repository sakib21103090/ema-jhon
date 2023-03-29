import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    console.log(cart); 
    let total=0;
    let TotalShipping=0;
    for( const product of cart){
        total=total+ product.price;
        TotalShipping=TotalShipping+ product.shipping;
    }
    const tax=total*7/100;
    const GrandTotal=total+TotalShipping+tax;
    return (
        <div className='Order-summary-container'>
            <h4>Order Summary</h4>
             <p>selected item:{cart.length}</p>
             <p>Total Price:$ {total}</p>
             <p>Total Shipping Charge:$ {TotalShipping}</p>
             <p>Tax :$ {tax.toFixed(2)}</p>
             <h5>Grand Total:$ {GrandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;