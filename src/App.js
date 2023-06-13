import React, {useState} from 'react'
import data from  "./Components/Back/Data/Data";
import Header from "./Components/Front/Header/Header";
import {BrowserRouter as Router } from "react-router-dom";
import Routes from './Components/Front/Routes/Routes';
const App = () => {

  const {  productItems } = data;
  const {cartItems, setCartItems} = useState([]);
  return (
    <div>
      <Router>
          <Header />
          <Routes productItems= {productItems} cartItems={cartItems} />
      </Router>


    </div>
  )
}

export default App