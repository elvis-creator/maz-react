import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'


function Navbar() {
  return (
    <div>

        <div className="navbar">
            <div className="logo">
                <h2>Masiza Africa Collection</h2>
            </div>
            <div className="links">
                 <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contacts</li>
                 </ul>
    
            </div>
            <div className="nav_icon_wrapper">
                <FaShoppingCart className='nav_icon'/>
                <p className="nav_cart_qty">0</p>
            </div>

        </div>

    </div>
  )
}

export default Navbar