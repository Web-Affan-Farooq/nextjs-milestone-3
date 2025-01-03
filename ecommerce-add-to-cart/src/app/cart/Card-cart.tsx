// small card which should be shown on shopping cart page
"use client";

import React, { useContext } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import Image from 'next/image';
import { CartContext } from '@/context/UserContext';
import { Product } from '@/logic/type_card';

interface Card {
    image: string;
    name: string;
    shortDescriptionForCartProduct: string;
    productId:number;
}

const notify = (statement:string) => {
    return toast.custom(<div className='bg-white py-[10px] absolute top-20 px-[25px] transition-all duration-700 ease-in-out text-gray-600'><i className="text-green-400 fa-solid fa-circle-check"></i> {statement}</div>,{
        position:"top-left",
        duration:2000
    })
  }

const Card_cart = ({ name, image, shortDescriptionForCartProduct , productId}: Card) => {
    const [cart, setCart] = useContext(CartContext)

    const handleRemoveFromCart = (productId:number) => {
        const requiredIndex = cart.findIndex((product:Product) => product.id === productId);
        cart.splice(requiredIndex, 1);
        setCart([...cart]);
        notify(`Product ${cart[requiredIndex].name} deleted from cart`);
    }  

    return (
        <div className=' w-[400px] flex flex-row flex-nowrap justify-start items-center rounded-md p-[10px] gap-3 bg-white max-sm:w-[350px]'>
            <Toaster/>
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