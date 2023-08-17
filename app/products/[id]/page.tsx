import React from 'react'
import Image from "next/image";
import {Products} from "../../utils/mock"
import Quantity from "@/app/shared/quantity";
import AddToCart from '@/app/shared/AddtoCart';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';



const getProductDetail = (id:number|string) => {
return Products.filter((product) => product.id == id)
};

const sizes = ["XS","S","M","L","XL"];
export default function Page({ params }: { params: { id:string } }) {   
const result = getProductDetail(params.id );
console.log(result)

  return <div>
    <Navbar/>
  
  <div className="flex py-10 md:py-12 mt-6 w-auto flex-wrap px-6 justify-around bg-[#fcfcfc] ">

{
result.map((product) => (
       <div key={product.id} className="flex flex-col md:flex-row  mx-16 justify-between">
        {/* left img */}
        <div className=" bg-gray-300">
          <Image src={product.image} alt={product.name} width={450} height={450}/>
        </div>
        {/* right content */}
        <div>
        <div className="ml-8 py-2">
       <h1 className="text-3xl  font-serif">{product.name}</h1>
       <h2 className="text-2xl font-semibold text-gray-400 mt-1 lg:mt-2">{product.type}</h2>
       <p className="mt-8 text-xl font-serif">Catogery: {product.catogery}</p>
   
</div>

<div className="ml-8 py-2">
<h3 className="text-base font-semibold mt-3">Select Size</h3>
{/* sizes */}
<div className="flex gap-x-2">
{
  sizes.map((item)=>(

  <div className="w-12 h-12 flex justify-center items-center rounded-full duration-300 hover:shadow-2xl mt-3">
    <span className="text-md font-bold text-gray-600 text-center">{item}</span>
     </div>
  ))
}
</div>
{/* quantity */}
<div className="gap-x-3 mt-6 flex">
<h3 className="text-lg font-semibold">Quantity:</h3>
<Quantity/>
</div>
{/* add to cart */}
<div className="flex gap-x-4 py-5">
  <div>
<AddToCart/>
  </div>
  <div className='text-2xl font-bold'>{product.price}</div>
</div>




       </div>
       </div>
       </div>
        ))
         }
</div>


{/* overview */}
<div className=" border-x-[40px] borde-y-[15px] border-y-8 md:border-x-[120px] md:border-y-[60px] border-[#fcfcfc] px-3 md:px-12 py-3 md:py-10 ">
  <div className='grid relative py-6 md:py-16'>
<h3 className=' flex items-center text-lg md:text-2xl font-bold'>Product Information</h3>
<h1 className='absolute text-gray-50 -pt-12 font-extrabold text-6xl md:text-9xl lg:text-[145px]  -z-10'>Overview</h1>
</div>
<hr />
<div className='flex mt-3 md:mt-6 space-x-8 md:space-x-28'>
  <div className='text-sm md:text-md font-bold text-gray-500 w-44 '>PRODUCT DETAILS:</div>
<div className=' flex justify-right text-xs md:text-lg w-[560px] line-clamp-3 md:line-clamp-none font-light '>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
</div>

<div className='flex mt-3 md:mt-6 space-x-8 md:space-x-28'>
  <div className='text-sm md:text-md font-bold text-gray-500 w-44 '>PRODUCT CARE</div>
<div className=' flex items-end justify-right text-sm md:text-lg font-serif md:font-semibold '>
<ul className='list-none'>
  <li className='list-disc ml-4'> Hand wash using cold water.</li>
  <li className='list-disc ml-4'>Do not using bleach.</li>
  <li className='list-disc ml-4'>Hang it to dry.</li>
  <li className='list-disc ml-4'>Iron on low temperature.</li>
  </ul>
  </div>
</div>
  </div>
<Footer/>
    </div>

  }