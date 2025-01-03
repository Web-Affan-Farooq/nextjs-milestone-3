"use client";

import React from 'react';
import toast, {Toaster} from 'react-hot-toast';
const notify = (statement:string) => {
  return toast.custom(<div className='bg-white py-[10px] absolute top-20 px-[25px] transition-all duration-700 ease-in-out text-gray-600'><i className="text-green-400 fa-solid fa-circle-check"></i> {statement}</div>,{
      position:"top-left",
      duration:2000
  })
}

const Section_3 = () => {
  return (
    <section className='py-[30px]'>
      <Toaster/>
        <h1 className='uppercase text-[24px] font-bold text-center'>SUBSCRIBE TO OUR NEWSLETTER</h1>
<br /><br /><br />
        <form action="" className='m-auto flex flex-row flex-nowrap justify-center items-center'>
            <label htmlFor="Your email" id='email'>
                <div>
                <input type="email" name='email' id='email' placeholder='Your email' required className='py-[5px] px-[20px]'/>
                <button type="button" className='bg-[#3835d3] text-white font-normal text-[15px] p-[7px] max-sm:p-[6px] rounded-lg' onClick={() => {
                  notify("Subscription added");
                }}>Subscribe</button>
                </div>
            </label>
        </form>
    </section>
  )
}

export default Section_3