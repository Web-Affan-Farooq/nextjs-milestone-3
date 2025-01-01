"use client";

import React, { useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/context/UserContext';

const Header = () => {
    const [cart] = useContext(CartContext);
    
    return (
        <header className='w-full fixed bg-white z-10 flex flex-row flex-wrap justify-between items-center px-[40px] py-[20px] max-md:justify-between max-md:items-start'>
            <Image src={"/images/logo.svg"} alt="Nike React Logo" width={200} height={200} />
            <div className='flex flex-row flex-wrap gap-8 justify-center items-center max-md:flex-col'>
                <div className='flex flex-col items-center justify-center group w-[60px]'>
                    <Link href={"/"} >Home</Link>
                    <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                </div>
                <div className='flex flex-col items-center justify-center group w-[60px] '>
                    <Link href={"/"} >About</Link>
                    <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                </div>
                <div className='flex flex-col items-center justify-center group w-[60px] '>
                    <Link href={"/"} >Contact</Link>
                    <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                </div>
                <div className='flex flex-col items-center justify-center group w-[60px] '>
                    <Link href={"/products"} >Products</Link>
                    <span className='w-0 h-[5px] transition-all duration-800 origin-left ease-in-out group-hover:w-full bg-[#E89B3C]'></span>
                </div>

                <Link href={"/cart"}>
                <div className='flex flex-nowrap justify-center items-center max-md:absolute max-md:right-0'>
                <i className={`text-gray-500 fa-solid fa-cart-shopping`}></i>
                <span className='relative right-1 bottom-2 w-[14px] h-[14px] rounded-full text-[13px] text-center bg-[#E89B3C]'>{cart.length}</span>
                </div>
                </Link>
            </div>

            <div className='md:hidden max-md:absolute max-md:right-0'>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    )
}

export default Header
