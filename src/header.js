import React from "react";
import "./header.css";
import "./logo.png";
import { SearchOutlined, ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./stateprovider";
import { Link } from "react-router-dom";
function Header () {
     const [{basket} , dispatch] = useStateValue();
    return(
        <div className="header">
            <Link to="/">
            <img  className ="header-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDlfrjl8yXSelQBucuzMbf6DxzsQcJ1yGQGw&usqp=CAU" />
            </Link>
            <input className ="header-search-input"  type="text"/>
                <SearchOutlined className="search-icon"/>
            
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-option-line1">Hello guest</span>
                   <Link to="/login"> <span className="header-option-line2">Sign In</span></Link>
                </div>
                <div className="header-option">
                <span className="header-option-line1">Returns</span>
                
                <span className="header-option-line2">&orders</span>
                
                </div>
                <div className="header-option">
                <span className="header-option-line1">Your</span>
                <span className="header-option-line2">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header-basket">
                    <ShoppingBasket/>
                    <span className="header-option-line2 basket-count">{basket?.length}</span>
                </div>
                </Link>
                </div>



        </div>
    );

}


export default Header;