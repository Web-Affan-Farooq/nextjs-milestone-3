"use client";

import React,{useState, useEffect} from 'react';
import Card from '../Card/Card';
import Link from 'next/link';

const Section_2 = () => {
const [apiData, setapiData] = useState();

useEffect(() => {
const getData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();

        setapiData(data)
        console.log(data);
        
    }
    catch(err) {
        console.error(err);
    }
}
getData();

},[]);
  return (
    <section>
        <h1 className='text-[30px] font-bold font-oswald uppercase'>Explore our products</h1>
        <br />
        <div className='flex flex-row flex-nowrap justify-center items-center gap-3'>
          
        </div>
        <br />
        <br />
        <p className='text-center'><Link href={"/products"} className='text-blue-600 font-bold text-[15px] '>See More ...</Link></p>
    </section>
  )
}

export default Section_2