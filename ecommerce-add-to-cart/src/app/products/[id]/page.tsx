"use client";

import React,{useState, useEffect, useContext} from 'react';
import Image from 'next/image';
import toast, {Toaster} from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import { Product } from '@/logic/type_card';
import { CartContext } from '@/context/UserContext';

const notify = (statement:string) => {
  return toast.custom(<div className='bg-white py-[10px] absolute top-20 px-[25px] transition-all duration-700 ease-in-out text-gray-600'><i className="text-green-400 fa-solid fa-circle-check"></i> {statement}</div>,{
      position:"top-left",
      duration:2000
  })
}
const ProductDynamicPage = () => {
  const [product, setproduct] = useState<Product>();
  const [cart, setCart] = useContext(CartContext);  

  const path = usePathname().split("/")[2];

  useEffect(() => {
    const getData = async () => {
      try {
          const response = await fetch(`/api/get-products/${path}`);
          const data = await response.json();
          setproduct(data)
      }
      catch(err) {
          console.error(err);
      }
    }
    getData();
 
    
  },[path]);

  const handleAddToCart = () => {
    if(product) {
      setCart([...cart, product]);
      notify("Product added to your cart successfully");
    }
    else {
      notify("Still loading product");
    }
  }
  
  return (
    <main>
      <article>
        <Toaster reverseOrder={true}/>
        <section className='flex flex-col py-20 justify-center items-center bg-[#e6e7e8]'>

          {product? (
            <div className='w-[90vw] flex flex-row flex-nowrap justify-center items-center gap-4 rounded-lg bg-white p-[20px] max-[550px]:flex-col'>
            <Image src={product?.image} alt={product?.name} width={300} height={300} className='w-1/2 h-full max-md:w-[250px] ' />

            <div className='w-[400px] flex flex-col flex-wrap gap-3 max-sm:w-full'>
              <h1 className='text-[20px] font-bold font-poppins'>{product?.name}</h1>
              <div>
                <div className='text-yellow-400'>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <span></span>
              </div>
              <p className='text-gray-400 text-[15px] max-sm:text-[14px]'>{product?.long_description}</p>
              <div className='text-green-500 font-bold'>{product?.availability}</div>
              <div>            <span className='bg-yellow-500 py-[5px] px-[10px] text-white rounded-md'>{product?.brand}</span></div>

              <div className='flex flex-row flex-wrap justify-between px-[6px] items-center'>
                <span className='text-yellow-600 font-bold  text-[20px]'>${product?.price}</span>
                <button type="button" className='bg-[#3835d3] text-white font-normal text-[15px] p-[7px] max-sm:p-[6px] rounded-lg' onClick={handleAddToCart}><i className={`fa-solid fa-cart-shopping`}></i> Add To Cart</button>
              </div>
            </div>
          </div>            
          ):(<div>Loading</div>)}


        </section>
      </article>
    </main>
  )
}

export default ProductDynamicPage