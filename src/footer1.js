import { ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./footer1.css";
function Footer1() {
    return(
        <div className="footer1">
            <span>Back To Top <ArrowUpward/></span>
            <ul id="ul1">
                <h2>Get To Know Us</h2>
                <a>Careers</a>
                <a>Blogs</a>
                <a>About Amazon</a>
                <a>Investor Relatios</a>
                <a>Amazon Devices</a>
                <a>Amazon Science</a>
            </ul>
            <div className="divide"></div>
            <ul id="ul2">
                <h2>Make Money With Us</h2>
                <a>Sell Products On Amazon</a>
                <a>Sell ON Amazon Business</a>
               <a>Become an Affiliate</a>
            <a>Advertise Your Products</a>
            <a>Self-Publish with Us</a>
<a>Host an Amazon Hub</a>
               
            </ul>
            <div className="divide"></div>
            <ul id="ul3">
           <h2>Amazon Payment Products</h2>
<a>Amazon Business Card</a>
<a>Shop with Points</a>
<a>Reload Your Balance</a>
<a>Amazon Currency Converter</a>
              
            </ul>
            <div className="divide"></div>
            <ul id="ul4">
           <h2> Let Us Help You</h2>
<a>Amazon and COVID-19</a>
<a>Your Account</a>
<a>Your Orders</a>
<a>Shipping Rates & Policies</a>
<a>Returns & Replacements</a>
<a>Manage Your Content and Devices</a>
<a>Amazon Assistant</a>
<a>Help</a>
              
            </ul>
            <div className="divide"></div>
        </div>
    )
}
export default Footer1;