// main cart route page

"use client";

import { CartContext } from '@/context/UserContext';
import React, { useState, useContext, useEffect } from 'react';
import { Product } from '@/logic/type_card';
import Form from './Form';
import Card_cart from './Card-cart';

const Cart = () => {

  const [productsInCart, setproductsInCart] = useState<Product[]>();
  const [cart] = useContext(CartContext);
  
  useEffect(() => {
    setproductsInCart(cart);
  },[cart]);

  useEffect(() => {
    setproductsInCart(cart)
  }, [cart])

  return (
    <section className='py-36 px-[20px]'>
      {
        productsInCart && productsInCart.length > 0 ? (

          <div>
            <h1 className='text-[30px] font-bold font-oswald uppercase'>Your Cart</h1> <span>Total {cart?.length} items</span>
            <br />
            <br />
            <br />

            <div className='flex flex-row flex-wrap justify-center items-start gap-3 m-auto max-md:flex-col max-md:items-center max-md:gap-10 bg-[#e6e7e8] py-[25px]'>{/*border-2 border-solid border-black */}

              <div className='flex flex-col flex-wrap justify-start items-start gap-3'>
                {productsInCart.map((product: Product, index: number) => {
                  return <Card_cart name={product.name} shortDescriptionForCartProduct={product.short_description} image={product.image} key={index} productId={product.id} />
                })}
              </div>

              <Form />

            </div>
          </div>
        ) : (<div className='text-[18px] text-gray-400 text-center'>Your Cart is empty</div>)
      }
    </section>
  )
}

export default Cart;