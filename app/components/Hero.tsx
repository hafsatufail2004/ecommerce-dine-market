import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import f1 from "../assets/Featured1.webp"
import f2 from "../assets/Featured2.webp"
import f3 from "../assets/Featured3.webp"
import f4 from "../assets/Featured4.webp"
import hero from "../assets/header.webp"
import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <div className="flex  px-6 py-3 md:px-10 md:py-6 lg:px-20 lg:py-16 ">
     
        {/*leftside content*/}
        <div className="py-20">
          <div className="w-[120px] h-[40px] bg-[#e1edff] text-blue-600 flex items-center justify-center font-bold text-md rounded-md mb-5">Sale 70%</div>
        <h1 className="lg:w-4/5 w-full scroll-m-20 text-5xl font-bold tracking-tight lg:text-6xl text-[#212121] py-6">
        An Industrial Take on Streetwear
    </h1>
    <p className="w-1/2 lg:w-3/5  leading-7 [&:not(:first-child)]:mt-6 text-base lg:text-lg text-[#666]">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>
    <Button className="w-[180px] h-[75px] bg-[#212121] border-t-2 border-l-2 border-gray-500 font-bold mt-8 mb-6 text-md flex justify-center items-center text-white "><ShoppingCart className="flex justify-center items-center mr-3 "/>Start <br/> Shopping</Button>

    <div className="grid md:flex py-5">
<div className=" flex">
<Image src={f1} alt="feature 1" className="lg:px-2 px-5 py-2 w-18 h-16"/>
<Image src={f2} alt="feature 2" className="lg:px-2 px-5 py-2 w-18 h-16"/>
</div>
<div className=" flex">
<Image src={f3} alt="feature 3" className="lg:px-2 px-5 py-2 w-18 h-16" />
<Image src={f4} alt="feature 4" className="lg:px-2 px-5 py-2 w-18 h-16"/>
</div>
    </div>
        </div>
   
   {/* right image */}
   <div className="flex-1 py-8 hidden lg:block ">
<div className="flex relative h-[600px] w-[600px] items-center justify-center bg-[#ffece3] rounded-full">
  <Image src={hero} alt="lady" className="absolute h-[630px] w-[630px]" />
    </div>
</div>

  </div>

  )
}