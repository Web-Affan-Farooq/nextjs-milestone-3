"use client";

import React, {createContext, useState} from 'react';

export const CartContext = createContext<[any[], React.Dispatch<React.SetStateAction<any[]>>]>( [[], () => {}] );

const CartContextProvider = ({children}:{children:React.ReactNode}) => {

  const [cart, setcart] = useState<any[]>([]);

  return (
    <CartContext.Provider value={[cart, setcart]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;