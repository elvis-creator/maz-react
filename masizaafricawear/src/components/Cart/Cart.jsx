import React, { useContext } from 'react'
import { ShopContext } from '../Shopcontext/Shopcontext'
import { FiTrash2 } from 'react-icons/fi';
import './Cart.css'


const Cart = () => {
  const {cart, clearCart, total, itemAmount} = useContext(ShopContext);
  return (
    <div>
      <div className="cart_container">

        <div className="cart_left">
          <div className="cart_header">
            <h1>Shopping Cart</h1>
            <h1>Item: ({itemAmount})</h1>
            <FiTrash2 onClick={clearCart} className='delete_cart'/>
          </div>
          <div className="cart_header">
            <span>Product Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div className="cart_detail">
            {cart.length > 0 ? (
              cart.map((item) => (
                <cartDetails item ={item} key={item.id}/>
              ))
            ) : ( <p>Your cart is empty</p>)}
          </div>
        </div>

        <div className="cart_right">
          <h2>Cart Summary</h2>
          <div className="summary_item">
            <span>Item:</span>
            <span>{itemAmount}</span>
          </div>
          <div className="summary_item">
            <span>Subtotal</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>
          <div className="summary_item">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary_item">
            <span>Promo Code</span>
            <input type="text" placeholder='Enter your code'/>
            <button className="apply_btn">Apply</button>
          </div>
          <div className="summary_item">
            <span>Total Cost</span>
            <span>${isNaN(total) ? 0 : total}</span>
          </div>
           <button className="checkout">CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cart