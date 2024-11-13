import React, { createContext, useState, useEffect } from 'react';

// CREATE SHOP CONTEXT
export const ShopContext = createContext();

// Import product data (assuming `productData` is an array of products from a separate file)
import { productData } from '../../data';

// ShopContextProvider component
const ShopContextProvider = ({ children }) => { // Destructure children

  // Product state
  const [products, setProducts] = useState(productData);

  //cart state
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);


  const [total, setTotal] = useState(0);

  //function to add to cart

  const addToCart = (product, id) => {
       const newItem = {...product, amount: 1};

       const cartItem = cart.find((item) => {
        return item.id === id;
       })

       if(cartItem) {
        const newCart = [...cart].map((item) =>{
          if(item.id === id){
            return {...item, amount: cartItem.amount + 1}
          } else {
            return item
          };
        })
        setCart(newCart);
       } else {
        setCart([...cart, newItem])
       }
  }

  //function to get the total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      const priceAsNumber = parseFloat(currentItem.price);
      if(isNaN(priceAsNumber)) {
        return accumulator;
      }
      return accumulator + priceAsNumber * currentItem.amount;
    }, 0)
    setTotal(total)
  }, [cart])



//function to calculate the quantity of item in our cart
useEffect(() => {
  if(cart) {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0)
    setItemAmount(amount)
  }
}, [cart])


//function to remove item from cart based on id
const removeFromCart = (id) => {
  const newCart = cart.filter((item) => {
    return item.id !== id;
  });
  setCart(newCart)
}

//clear cart 
const clearCart = () => {
  setCart([]);
}

//function to increase amount
const increaseAmount = (id) => {
  const cartItem = cart.find((item) => item.id === id);
  addToCart(cartItem, id)
}

//fnx decrease amount 
const decreaseAmount = (id) => {
  const cartItem = cart.find((item) => {
    return item.id === id;
  })
  if(cartItem) {
    const newCart = cart.map((item) => {
      if(item.id === id) {
        return {...item, amount: cartItem.amount -1};
      } else {
        return item;
      }
    });
    setCart(newCart)
  } else {
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  }
}

  return (
    <ShopContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount,total }}>
      {children} {/* This will render all nested components */}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider; 
