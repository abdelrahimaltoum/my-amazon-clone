import {StarRateRounded } from "@material-ui/icons";
import "./product.css";
import { useStateValue } from "./stateprovider";
function Product ({id ,title , image , price , rating}){
    const [{basket} , dispatch] = useStateValue();
    const addtobasket =() => {
        dispatch({
            type:"ADD-TO-BASKET" ,
            item:{
            id:id ,
            title : title ,
            image:image,
            price:price,
            rating:rating,
        },
    });
    };
    return(
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                
            <div className="product-rating">
                {Array(rating).fill().map((_,i) => (
                <StarRateRounded/> ))}
                
            </div>
            </div>
            <img src={image} />
            <button onClick={addtobasket}>Add To Basket</button>

        </div>

    )
}
export default Product;