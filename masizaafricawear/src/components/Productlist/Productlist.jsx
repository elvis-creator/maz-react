import React, { useContext } from 'react'
import { ShopContext } from '../Shopcontext/Shopcontext'
import './Productlist.css'

function Productlist() {
  const { products } = useContext(ShopContext)

  return (
    <div>
      <div className="product_list">
        <h2>Our Collection</h2>
        <div className="product-grid">
          {products.map((product) => {
            // Destructure product
            const { id, image, title, price } = product

            // Return JSX for each product
            return (
              <div key={id} className="product-card">

                <img src={image} alt={title} className='product-image' />
                <div className="product_info">
                <h3>{title}</h3>
                <p>${price}</p>
                </div>
                <button className="add-to-cart">Add to Cart</button>
                
                
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Productlist
