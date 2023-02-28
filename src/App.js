import React from "react";
import { Router,  Routes ,Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./header.js";
import Home from "./home.js"
import Checkout from "./checkout.js"
import Login from "./login.js"
import Register from "./register";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        
      <Route path="/login" element={
    
   
  <Login/>
 
  }>
  </Route>
    <Route path="/register" element={
    
   
    <Register/>
   
    }>
    
      </Route>
      <Route path="/checkout" element={
      <>
      <Header/>
      <Checkout/>
      </>}>
    
    
      </Route>
      <Route path="/" element={
    <>
    <Header/>
    <Home/>
  </>
  }>
    
      </Route>
      
      </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
