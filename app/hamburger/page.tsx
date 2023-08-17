import React from 'react'
import { ShoppingCart } from "lucide-react";
import Link from 'next/link'



const page = () => {
 
  return (<div className='bg-gray-50 grid justify-center items-center text-center h-auto w-auto py-28'>

        <div className='flex justify-center py-3'>
            {/* input */}
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>

    <div className='hover:underline text-lg  py-3 font-semibold'>
    <Link href={"/"}>
    Home
        </Link>
        </div>

  <div className='hover:underline text-lg  py-3 font-semibold'>
    <Link href={"catogery/female"}>
        Female
        </Link>
        </div>

        <div className='hover:underline text-lg  py-3 font-semibold'>
    <Link href={"catogery/male"}>
        Male
        </Link>
        </div>

        <div className='hover:underline text-lg  py-3 font-semibold'>
    <Link href={"catogery/kids"}>
      Kids
        </Link>
        </div>
  
        <div className='hover:underline text-lg  py-3 font-semibold'>
    <Link href={"catogery/allprducts"}>
       All Products
        </Link>
        </div>

    </div>
  
  )

}

export default page