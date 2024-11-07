import React, { createContext, useState, useEffect } from 'react';

// CREATE SHOP CONTEXT
export const ShopContext = createContext();

// Import product data (assuming `productData` is an array of products from a separate file)
import { productData } from '../../data';

// ShopContextProvider component
const ShopContextProvider = ({ children }) => { // Destructure children

  // Product state
  const [products, setProducts] = useState(productData);

  return (
    <ShopContext.Provider value={{ products }}>
      {children} {/* This will render all nested components */}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
