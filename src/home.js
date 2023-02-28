import "./home.css"
import Product from "./product"

function Home (){
    return(
        <div className="home">
            <div className="home-container">
               <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" className="home-image"/>
                <div className="home-row">
                    <Product 
                    id="1"
                    title="Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Matte Black (Latest Model)"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/51-+O3-wFxL._AC_UL320_.jpg"
                    rating={4}
                    />
                    <Product 
                    id="2"
                    title="Fitbit Versa 2 Health and Fitness Smartwatch with Heart Rate, Music, Alexa Built-In, Sleep and Swim Tracking, Black/Carbon, One Size (S and L Bands Included)"
                    price={35.85}
                    image="https://m.media-amazon.com/images/I/51g6xgLc61L._AC_SX569_.jpg"
                    rating={5}
                    />
                </div>
                <div className="home-row">
                <Product 
                    id="3"
                    title="Philips Kitchen Appliances SM7684/04 Esspresso Machine, Large, Titanium"
                    price={65.00}
                    image="https://m.media-amazon.com/images/I/61K9g5lS+oL._AC_SY300_SX300_.jpg"
                    rating={4}
                    />
                     <Product 
                    id="4"
                    title="The Light We Carry: Overcoming in Uncertain Times Hardcover – November 15, 2022"
                    price={21.50}
                    image="https://m.media-amazon.com/images/I/41HcM1yzHcL._SX327_BO1,204,203,200_.jpg"
                    rating={4}
                    />

<Product 
                    id="5"
                    title="Philips Norelco Multigroomer All-in-One Trimmer Series 3000, 13 Piece Mens Grooming Kit, for Beard, Face, Nose, and Ear Hair Trimmer and Hair Clipper"
                    price={25}
                    image="https://m.media-amazon.com/images/I/51s7FUpMbHL._SX300_SY300_QL70_FMwebp_.jpg"
                    rating={2} />
                    
                    
                </div>
                <div className="home-row">
                <Product 
                    id="6"
                    title="Blink Video Doorbell + 3 Outdoor camera system with Sync Module 2 | Two-year battery life, Two-way audio, HD video, motion and chime app alerts and Alexa enabled — wired or wire-free (Black)"
                    price={39.45}
                    image="https://images-na.ssl-images-amazon.com/images/I/316LfXyHqdL._AC_SR400,600_.jpg"
                    rating={4}
                    />
                
                <Product 
                    id="7"
                    title="SAMSUNG Galaxy Tab S7 FE 12.4” 64GB WiFi Android Tablet w/ Large Screen, Long Lasting Battery, S Pen Included, Multi Device Connectivity, US Version, 2021, Mystic Black"
                    price={55.00}
                    image="https://m.media-amazon.com/images/I/91pjZAMbEUS._AC_SX679_.jpg"
                    rating={5}
                    />
                </div>
                <div className="home-row">
                <Product 
                    id="8"
                    title="Precor EFX 833 Commercial Series Elliptical Fitness Crosstrainer"
                    price={45.00}
                    image="https://m.media-amazon.com/images/I/61HfeleMhJL._AC_SX679_.jpg"
                    rating={4}
                    />
                     <Product 
                    id="9"
                    title="Eatex Nonstick Bakeware Sets with Baking Pans Set, 39 Piece Baking Set with Muffin Pan, Cake Pan & Cookie Sheets for Baking Nonstick Set, Steel Baking Sheets for Oven with Kitchen Utensils Set - Black"
                    price={60.00}
                    image="https://m.media-amazon.com/images/I/81pnmBciKhL._AC_SX679_.jpg"
                    rating={4}
                    />

<Product 
                    id="10"
                    title="Hair Dryer 1875W, Negative Ionic Fast Dry Low Noise Blow Dryer, Professional Salon Hair Dryers with Diffuser, Concentrator, Styling Pik, 2 Speed and 3 Heat Settings"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/6160Q9ZeRtL._SX425_.jpg"
                    rating={2} />
                    
                    
                </div>
                <div className="home-row">
                <Product 
                    id="11"
                    title="OfficeSuite Home & Business 2021 | Lifetime License | Compatible with Word®, Excel®, PowerPoint® & PDF for Windows"
                    price={20.50}
                    image="https://m.media-amazon.com/images/I/61Wz8alX49L._AC_SY741_.jpg"
                    rating={5}
                    />
                
                <Product 
                    id="12"
                    title="Nikon Coolpix B500 Digital Camera (Black)"
                    price={70.45}
                    image="https://m.media-amazon.com/images/I/61Tywf7uJGL._AC_SX425_.jpg"
                    rating={5}
                    />
                </div>
                <div className="home-row">
                <Product 
                    id="13"
                    title="Amazon Essentials Men's Lightweight French Terry Full-Zip Hooded Sweatshirt"
                    price={30.00}
                    image="https://m.media-amazon.com/images/I/91J2ZeaLnCL._AC_SY500._SX._UX._SY._UY_.jpg"
                    rating={4}
                    />
                     <Product 
                    id="14"
                    title="Eatex Nonstick Bakeware Sets with Baking Pans Set, 39 Piece Baking Set with Muffin Pan, Cake Pan & Cookie Sheets for Baking Nonstick Set"
                    price={22.50}
                    image="https://m.media-amazon.com/images/I/81pnmBciKhL._AC_SX679_.jpg"
                    rating={4}
                    />

<Product 
                    id="15"
                    title="LG 86NANO90UPA Alexa Built-In NanoCell 90 Series 86 4K Smart UHD NanoCell TV (2021)"
                    price={249.99}
                    image="https://m.media-amazon.com/images/I/91GRcF718oL._AC_SX679_.jpg"
                    rating={5}
                    />
                    
                </div>
                <div className="home-row">
                <Product 
                    id="16"
                    title="Holstein Housewares - Non-Stick Omelet & Frittata Maker, Black/Stainless Steel - Makes 2 Individual Portions Quick & Easy"
                    price={40.00}
                    image="https://m.media-amazon.com/images/I/71NjK0q-tVL._AC_UL320_.jpg"
                    rating={3}
                    />
                
                <Product 
                    id="17"
                    title="COSORI Electric Kettle for Boiling Water, 1500W Wider Mouth 1.7L Glass Electric Tea Kettle & Electric Water Boiler, Stainless Steel Inner Lid, Auto Shut-Off & Boil-Dry Protection, BPA Free, Black"
                    price={35.00}
                    image="https://m.media-amazon.com/images/I/71AoKjY9GjL._AC_SX679_.jpg"
                    rating={4}
                    />
                </div>
                <div className="home-row">
                <Product 
                    id="18"
                    title="iTouchless 13 Gallon SensorCan Trash Can with Odor Filter, Stainless Steel, Oval Shape, Sensor-Activated Lid Garbage Bin for Home, Office, Slim Space-Saving, Battery & AC Adapter not included"
                    price={50.00}
                    image="https://m.media-amazon.com/images/I/61FfFcQW2aL._AC_SX679_.jpg"
                    rating={4}
                    />
                    <Product 
                    id="19"
                    title="DREAM PAIRS Women's Wide Calf Comfortable Winter Knee High Riding Boots"
                    price={49.99}
                    image="https://m.media-amazon.com/images/I/61bL1WoaZDL._AC_UY500_.jpg"
                    rating={4} />
                    
                     <Product 
                    id="20"
                    title="Purina Friskies Canned Wet Cat Food 32 Count Variety Packs - (32) 5.5 oz Cans"
                    price={22.50}
                    image="https://m.media-amazon.com/images/I/81iIQO3FF2L._AC_SX679_.jpg"
                    rating={4}
                    />


                </div>
                
            </div>
            </div>
        
    )



}
export default Home