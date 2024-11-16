import React, {useContext} from 'react'
import { ShopContext } from '../Shopcontext/Shopcontext'
import { FiTrash2 } from 'react-icons/fi';
import { IoMdRemove } from 'react-icons/io';

function Cartdetails({item}) {
    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(ShopContext);

    const {id, name, image, price, amount} = item;
  return (
    <div>
        <div className="cart_item">
            <div className="product_detail_container">
                <img src={image} alt=""/>
                <div className="product_info">
                    <h3>{name}</h3>
                    <div className="cart_item_remove" onClick={()=> removeFromCart()}> <FiTrash2/> Remove</div>
                </div>
            </div>
            <div className="quantity">
                <button onClick={()=> decreaseAmount(id)}> <IoMdRemove/> </button>
                <span>{amount}</span>
                <button onClick={()=> increaseAmount(id)}> <IoMdAdd/> </button>
            </div>
            <div className="price">${price}</div>
            <div className="total">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
        </div>
    </div>
  )
}

export default Cartdetails