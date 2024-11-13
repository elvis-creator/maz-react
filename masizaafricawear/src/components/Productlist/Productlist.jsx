import React, { useContext, useState } from 'react'
import { ShopContext } from '../Shopcontext/Shopcontext'
import './Productlist.css'
import { IoMdCloseCircle } from 'react-icons/io';

function Productlist() {
  const { products,addToCart } = useContext(ShopContext);

  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleModal = (product = null) => {
        setModal(!modal);
        setSelectedProduct(product);
  }

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

                <img src={image} alt={title} className='product-image' onClick={()=> toggleModal(product)}/>
                <div className="product_info">
                <h3>{title}</h3>
                <p>${price}</p>
                </div>
                <button className="add-to-cart" onClick={()=> addToCart(product, id)}>Add to Cart</button>
                
                
              </div>
            )
          })}
        </div>
      </div>

      {modal && selectedProduct && (
        <div className="product_modal">
        <div className="product_modal_content">
        <IoMdCloseCircle className='modal_close' onClick={toggleModal} />
           <div className="modal_content">
            <img src={selectedProduct.image} className="modal_image" alt=""/>
            <h3 className="modal_title">{selectedProduct.title}</h3>
            <h2 className="modal_price">${selectedProduct.price}</h2>
            <button className="buy_now">Buy Now</button>
           </div>
        </div>
          
        </div>
      )}
    </div>
  )
}

export default Productlist
