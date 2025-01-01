// small card which should be shown on shopping cart page
"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '@/context/UserContext';
import { Product } from '@/logic/type_card';

interface Card {
    image: string;
    name: string;
    shortDescriptionForCartProduct: string;
    productId:number;
}
const Card_cart = ({ name, image, shortDescriptionForCartProduct , productId}: Card) => {
    const [cart, setCart] = useContext(CartContext)

    const handleRemoveFromCart = (productId:number) => {
        let newCart = cart.filter((product:Product) => product.id !== productId);
        setCart(newCart);
    }  
    return (
        <div className=' w-[400px] flex flex-row flex-nowrap justify-start items-center rounded-md p-[10px] gap-3 bg-white max-sm:w-[350px]'>{/* border-2 border-solid border-black */}
            <Image src={image} alt={name} width={100} height={100} className=' h-full w-[100px]' />
            <div className='flex flex-col flex-nowrap justify-start gap-1'>
                <h1 className='text-[18px] font-bold'>{name}</h1>
                <p className='text-gray-400 text-[15px]'>{shortDescriptionForCartProduct}</p>
                <div className='flex flex-row flex-nowrap justify-between items-center'>
                    <i className="text-gray-700 fa-solid fa-trash-can" onClick={() => {
                        handleRemoveFromCart(productId)
                    }}></i>
                </div>
            </div>
        </div>)
}

export default Card_cart;