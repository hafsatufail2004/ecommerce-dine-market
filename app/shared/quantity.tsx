"use client"
import React,{useState} from 'react'

const Quantity = () => {
 const [num,setNum]= useState(1);
  return (
    <div className='flex gap-x-3 items-center'>
        {/* minus */}
        <button className='border rounded-full w-9 h-9  text-xl center' onClick={()=>{
           setNum(num <= 1 ? 1 : num - 1)
        }} >-</button>
{/* number */}
<span className='text-lg'>{num}</span>
{/* plus */}
<button className='border rounded-full w-9 h-9 center text-xl' onClick={()=>{
    setNum(num + 1)
}}  >+</button>
    </div>
  )
}

export default Quantity