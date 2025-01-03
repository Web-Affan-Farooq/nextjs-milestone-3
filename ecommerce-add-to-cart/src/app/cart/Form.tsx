// payment processing form component

"use client";
import React, { useContext, useEffect, useState } from 'react';
import toast , {Toaster} from 'react-hot-toast';
import Image from 'next/image';
import { CartContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

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
const notify = (statement:string) => {
  return toast.custom(<div className='bg-white py-[10px] absolute top-20 px-[25px] transition-all duration-700 ease-in-out text-gray-600'><i className="text-green-400 fa-solid fa-circle-check"></i> {statement}</div>,{
      position:"top-left",
      duration:2000
  })
}


const Form = () => {
    const [deliveryOption, setdeliveryOption] = useState("");
    const [cart] = useContext(CartContext);
    const [payment, setpayment] = useState("");
    const [total, settotal] = useState(0);
    const router = useRouter();
    const [paymentData, setpaymentData] = useState<IPayment>({
      userEmail:"", 
      customerName:"",
      phoneNumber:"",
      country:"",
      bankName:"",
      shipmentType:"",
      accountNumber:"",
      paymentType:"",
    });
    
    useEffect(() => {
      setpaymentData(
        (prevData) => ({...prevData, paymentType:payment}) 
      )
    }, [payment]); 

    useEffect(() => {
      setpaymentData(
        (prevData) => ({...prevData, shipmentType:deliveryOption}) 
      )
    },[deliveryOption]); 

    useEffect(() => {
      const totalIds = cart.reduce((total, item) => total + item.price, 0);
      settotal(totalIds)
        },[cart]);

    const handleFrom = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      notify("Payment successfull");
      // console.log(paymentData);
      

      setpaymentData({...paymentData, userEmail:"", 
        customerName:"",
        phoneNumber:"",
        country:"",
        bankName:"",
        shipmentType:"",
        accountNumber:"",
        paymentType:""});
        
        router.push("/");
    }

  return (
<div className='w-[330px] rounded-md p-[10px] '>
  <Toaster/>
          <h1 className='text-center text-[20px] font-bold'>Checkout</h1>
          <div className='text-center'>Total amount <span className='text-[24px] text-[orangered] font-bold '> ${total.toFixed()}</span></div>
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
              setpaymentData((prevData) => ({...prevData, country:e.target.value}));
            }}>
                <option value="Pakistan">Pakistan</option>
                <option value="India">India</option>
                <option value="Iran">Iran</option>
              </select>

            <div>
              <label htmlFor="Select shipment">Select shipment</label>
              <div className='flex flex-row flex-nowrap justify-center items-center gap-2'>
                <div className={`border-[2px] text-[17px] font-bold rounded-md py-[8px] px-[18px] ${deliveryOption === "Ship" ? "border-yellow-600": "border-transparent"}`} onClick={() => {
                  setdeliveryOption("Ship")
                }}><i className="fa-solid fa-truck"></i> Ship</div>
                <div className={`border-[2px] border-solid text-[17px] font-bold rounded-md py-[8px] px-[18px] ${deliveryOption === "Pickup"? "border-yellow-600": "border-transparent"}`} onClick={() => {
                  setdeliveryOption("Pickup")

                }}><i className="fa-solid fa-location-dot"></i> Pickup</div>
              </div>
            </div>

            <label htmlFor="account number" id='account-number'>
              Account number</label>
            <input type="text" name='accountNumber' id='account-number' placeholder='0000-0000' required className='w-[280px] px-[15px] py-[7px] rounded-md' onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
              setpaymentData((prevData) => ({...prevData, accountNumber:e.target.value}))
            }}/>


            <div>
              <label htmlFor="Select shipment">Select payment</label>
              <div className=' flex flex-row flex-wrap justify-center items-center gap-2'>
                <div className={`text-[17px] font-bold rounded-md px-[10px] `}>
                  <Image src={"/images/icons/paypal.svg"} alt='paypal' width={60} height={60} className={`rounded-md border-[2px] border-solid ${payment === "Paypal"? "border-yellow-600": "border-transparent"}`} onClick={() => {
                    setpayment("Paypal")
                  }}/>
                </div>
                <div className={`text-[17px] font-bold rounded-md px-[10px] `}>
                  <Image src={"/images/icons/master-card.svg"} alt='paypal' width={60} height={60} className={`rounded-md border-[2px] border-solid ${payment === "Master card"? "border-yellow-600": "border-transparent"}`} onClick={() => {
                    setpayment("Master card")
                  }}/>
                </div>
                <div className={`text-[17px] font-bold rounded-md px-[10px]`}>
                  <Image src={"/images/icons/stripe.svg"} alt='paypal' width={60} height={60} className={`rounded-md border-[2px] border-solid ${payment === "Stripe"? "border-yellow-600": "border-transparent"}`} onClick={() => {
                    setpayment("Stripe")
                  }}/>
                </div>
                <div className={`text-[17px] font-bold rounded-md px-[10px] `}>
                  <Image src={"/images/icons/visa.svg"} alt='visa' width={60} height={60} className={`rounded-md border-[2px] border-solid ${payment === "Visa"? "border-yellow-600": "border-transparent"}`} onClick={() => {
                    setpayment("Visa")
                  }}/>
                </div>
              </div>
            </div>
            <br />
            <button type="submit" className='bg-[#3835d3] font-semibold p-[10px] text-white text-[15px] rounded-lg'><i className={`fa-solid fa-cart-shopping`}></i> Confirm purchase</button>
          </form>
        </div>  )
}

export default Form