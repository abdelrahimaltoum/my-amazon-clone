import React from "react";
import "./checkout.css";
import { useStateValue } from "./stateprovider";
import Subtotal from "./subtotal.js";
import Checkoutproduct from "./checkoutproduct.js"
function Checkout() {
    const [{basket} , dispatch] = useStateValue();
   
    return(
        <div className="checkout">
            <div className="checkout-left">
              

            <div>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            {basket.map(item =>(
                <Checkoutproduct
                id={item.id} 
                title={item.title} 
                image={item.image} 
                price={item.price} 
                rating={item.rating} />
            )) }
                </div>
                </div>
                <div className="checkout-right">
                    <Subtotal />
                </div>




        </div>
    );
}
export default Checkout;
