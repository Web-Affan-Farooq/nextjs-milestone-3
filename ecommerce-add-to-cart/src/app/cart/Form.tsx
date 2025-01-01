// payment processing form component

"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface IPayment {
  userEmail:string;
  customerName:string;
  phoneNumber:string;
  country:string;
  bankName:string;
  shipmentType:string;
  accountNumber:string;
  paymentType:string;
}

const Form = () => {
    const [deliveryOption, setdeliveryOption] = useState("Ship");
    const [payment, setpayment] = useState("");
    const [paymentData, setpaymentData] = useState<IPayment>({
      userEmail:"", //done
      customerName:"",//done
      phoneNumber:"",//done
      country:"",//done
      bankName:"",//done
      shipmentType:"",//done
      accountNumber:"",//done
      paymentType:"",//done
    });
    
    useEffect(() => {
      setpaymentData({...paymentData, paymentType:payment});
    }, [payment]);
    useEffect(() => {
      setpaymentData({...paymentData, shipmentType:deliveryOption})
    },[deliveryOption])

    const handleFrom = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // console.log(paymentData);

      alert("Thanks for purchasing")
    }
  return (
<div className='w-[330px] rounded-md p-[10px] '>
          <h1 className='text-center text-[20px] font-bold'>Checkout</h1>
          <br />
          <form action="" className='flex flex-col flex-nowrap justify-center items-start gap-2' onSubmit={handleFrom}>
            <label htmlFor="Email" id='email'>Your email</label>

              <input type="email" name='email' id='email' placeholder='m@example.com' required className='w-[280px] px-[15px] py-[7px] rounded-md' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setpaymentData({...paymentData, userEmail:e.target.value})
            }}/>
            <label htmlFor="firstname" id='user-name'>Your name</label>
              <input type="text" name='userName' id='user-name' placeholder='joe doe' required className='w-[280px] px-[15px] py-[7px] rounded-md' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setpaymentData({...paymentData, customerName:e.target.value})
            }}/>
            <label htmlFor="phonenumber" id='phone-number'>Phonnumber</label>

              <input type="tel" name='phoneNumber' id='phone-number' placeholder='0000-0000000' required className='w-[280px] px-[15px] py-[7px] rounded-md' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setpaymentData({...paymentData, phoneNumber:e.target.value})
            }}/>
            <label htmlFor="Bank name" id='bank-name'>Bank</label>
              <select name="bankName" id="bank-name" className='w-[280px] px-[15px] py-[7px] rounded-md bg-white' onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
              setpaymentData({...paymentData, bankName:e.target.value})
            }}>
                <option value="bank example-1" className='w-[280px] px-[15px] py-[7px] rounded-md'>Bank example-1 </option>
                <option value="bank example-1" className='w-[280px] px-[15px] py-[7px] rounded-md'>Bank example-2 </option>
                <option value="bank example-1" className='w-[280px] px-[15px] py-[7px] rounded-md'>Bank example-3 </option>
              </select>
            <label htmlFor="Country" id='country'>Select country</label>

              <select name="country" id="country" className='w-[280px] px-[15px] py-[7px] rounded-md bg-white' onChange={(e:React.ChangeEvent<HTMLSelectElement>) => {
              setpaymentData({...paymentData, country:e.target.value})
            }}>
                <option value="example-1">Pakistan</option>
                <option value="bank example-1">India</option>
                <option value="bank example-1">Iran</option>
              </select>

            <div>
              <label htmlFor="Select shipment">Select shipment</label>
              <div className='flex flex-row flex-nowrap justify-center items-center gap-2'>
                <div className={`border-[1.5px] border-solid border-gray-400 text-[17px] font-bold rounded-md py-[8px] px-[18px] ${deliveryOption === "Ship"? "border-7 border-solid border-blue-800": ""}`} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  setdeliveryOption("Ship")

                }}><i className="fa-solid fa-truck"></i> Ship</div>
                <div className={`border-[1.5px] border-solid border-gray-400 text-[17px] font-bold rounded-md py-[8px] px-[18px] ${deliveryOption === "Pickup"? "border-7 border-solid border-blue-800": ""}`} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  setdeliveryOption("Pickup")

                }}><i className="fa-solid fa-location-dot"></i> Pickup</div>
              </div>
            </div>

            <label htmlFor="account number" id='account-number'>
              Account number</label>
            <input type="text" name='accountNumber' id='account-number' placeholder='0000-0000' required className='w-[280px] px-[15px] py-[7px] rounded-md' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setpaymentData({...paymentData, country:e.target.value})
            }}/>


            <div>
              <label htmlFor="Select shipment">Select payment</label>
              <div className=' flex flex-row flex-wrap justify-center items-center gap-2'>
                <div className={`text-[17px] font-bold rounded-md px-[10px] `}>
                  <Image src={"/images/icons/paypal.svg"} alt='paypal' width={60} height={60} className={`${payment === "Paypal"? "border-7 border-solid border-blue-800": ""}`} onClick={(e:React.MouseEvent<HTMLImageElement>) => {
                    setpayment("Paypal")
                  }}/>
                </div>
                <div className={`text-[17px] font-bold rounded-md px-[10px] `}>
                  <Image src={"/images/icons/master-card.svg"} alt='paypal' width={60} height={60} className={`${payment === "Master card"? "border-7 border-solid border-blue-800": ""}`} onClick={(e:React.MouseEvent<HTMLImageElement>) => {
                    setpayment("Master card")
                  }}/>
                </div>
                <div className={`text-[17px] font-bold rounded-md px-[10px]`}>
                  <Image src={"/images/icons/stripe.svg"} alt='paypal' width={60} height={60} className={`${payment === "Stripe"? "border-7 border-solid border-blue-800": ""}`} onClick={(e:React.MouseEvent<HTMLImageElement>) => {
                    setpayment("Stripe")
                  }}/>
                </div>
                <div className={`text-[17px] font-bold rounded-md px-[10px] `}>
                  <Image src={"/images/icons/visa.svg"} alt='visa' width={60} height={60} className={`${payment === "Visa"? "border-7 border-solid border-blue-800": ""}`} onClick={(e:React.MouseEvent<HTMLImageElement>) => {
                    setpayment("Visa")
                  }}/>
                </div>
              </div>
            </div>
            <button type="submit" className='bg-[#3835d3] font-semibold p-[10px] text-white text-[15px] rounded-lg'><i className={`fa-solid fa-cart-shopping`}></i> Confirm purchase</button>
          </form>
        </div>  )
}

export default Form