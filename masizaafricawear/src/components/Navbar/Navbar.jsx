import React, { useContext } from 'react';  // Import useContext
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import { ShopContext } from '../Shopcontext/Shopcontext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Destructure itemAmount from ShopContext using useContext
  const { itemAmount } = useContext(ShopContext);

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
        <Link to='/cart'>
        <div className="nav_icon_wrapper">
          <FaShoppingCart className="nav_icon" />
          {/* Display the itemAmount from the context */}
          <p className="nav_cart_qty">{itemAmount}</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
