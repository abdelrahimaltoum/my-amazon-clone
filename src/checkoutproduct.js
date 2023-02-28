import { StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "./stateprovider";

function Checkoutproduct ({id , image , title , price , rating}){
    const [{basket} , dispatch] = useStateValue();
    const removefrombasket = () => {
        dispatch({
            type:"REMOVE-FROM-BASKET",
            id:id
        })
    }
    return(
        <div className="checkout-product">
            <img className="checkoutproduct-image" src={image} />
            <div className="checkoutproduct-info">
                <p className="checkoutproduct-title">{title}</p>
                <p className="checkoutproduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct-rating">
                {Array(rating).fill().map((_,i) => (
                <StarBorderOutlined/> ))}
                </div>
                <button  className="remove-button"
                onClick={removefrombasket}>Remove From Basket</button>
            </div>




        </div>
    )
}
export default Checkoutproduct;