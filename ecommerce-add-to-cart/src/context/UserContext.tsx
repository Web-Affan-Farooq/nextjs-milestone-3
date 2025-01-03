"use client";

import React, {createContext, useState} from 'react';
import { Product } from '@/logic/type_card';

export const CartContext = createContext<[Product[], React.Dispatch<React.SetStateAction<Product[]>>]>( [[], () => {}] );

const CartContextProvider = ({children}:{children:React.ReactNode}) => {

  const [cart, setcart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={[cart, setcart]}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;