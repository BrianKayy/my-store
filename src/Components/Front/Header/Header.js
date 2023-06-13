import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
        <div className='header'>
            <h1>
                <Link to="/" className="logo">
                    Electronic Shop
                </Link>
            </h1>

            <div className="header-links">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
        
    </header>
  )
}

export default Header