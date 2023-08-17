import Image from "next/image"
import event1 from "../assets/event1.webp"
import event2 from "../assets/event2.webp"
import event3 from "../assets/event3.webp"

export const Promotion = () => {
  return (
<section>

    <div className="px-20">
        {/* heading section*/}
<div className="text-center space-y-4">
    <p className="text-md font-bold text-blue-700">Promotions</p>
<h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[#212121]">Our Promotions Events</h3>
</div>
{/* promotions and price*/}
{/* promition image and price section */}
<div className="flex justify-center flex-col  md:flex-row mt-9 md:mt-12">
<div>
{/* Event 1 & discount div is in this div */}
    <div className="h-60 w-[21rem] md:h-[14rem] md:w-[26rem] grid md:flex justify-content justify-center gap-x-0.5  bg-[#d6d6d8] mr-8  md:flex-row">
        <div className="pl-6 py-3 md:py-6">
     <h3 className="text-xl md:text-3xl text-black font-bold">Get Up To <span>60%</span></h3>
     <p className="text-gray-900 text-md md:text-xl">For the summer season</p>
        </div>
        <div><Image src={event1} alt="" className="h-[163px] w-[280px] md:h-[223px] md:w-[420px]"/></div>
    </div>

{/* discount div */}
<div className="bg-[#212121] mt-4 box-border h-60 w-[21rem] md:h-[14rem] md:w-[26rem]   flex flex-col  items-center justify-center ">
    <h3 className="text-4xl text-white font-bold text-center pt-8">GET 30% Off</h3>
    <p className="text-white text-xl text-center mt-4">USE PROMO CODE</p>
    <button className="bg-[#474747] text-white text-sm md:text-md font-bold h-8 w-[18rem] md:h-10 md:w-[20rem] m-2 rounded-md">D I N E W E E K E N D S A L E</button>
</div>
</div>
{/* flex sweatshirt male */}
<div className="bg-[#efe1c7] h-66 w-[21rem] md:h-70 md:w-[20rem] mr-4 mt-4 md:mt-0 ">
    <p className="text-xl mt-4 font-medium px-4 ">Flex Sweatshirt</p>
    <div className="flex px-4">
    <h4 className="text-md pr-3"> <del>$100.00 </del> </h4>
    <h3 className="text-xl font-semibold"> $75.00</h3>
    </div>
    <Image src={event2} alt="" className="h-[340px] md:h-[393px]"/>
</div>
{/* Flex Push Button Bomber */}
<div className="bg-[#d7d7d9] h-66 w-[21rem] md:h-68 md:w-[20rem] pt-4 px-4 mt-4 md:mt-0">
    <p className="text-xl mt-2 font-medium px-4 ">Flex Push Button Bomber</p>
    <div className="flex px-4">
    <h4 className="text-md pr-3"> <del>$225.00 </del> </h4>
    <h3 className="text-xl font-semibold"> $190.00</h3>
    </div>
    <Image src={event3} alt=" " className=" h-[340px] md:h-[385px]" />
</div>
</div>
    </div>

</section>
  )
}