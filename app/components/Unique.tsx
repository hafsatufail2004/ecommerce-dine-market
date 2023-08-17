import Details from "../shared/details"
import Image from "next/image"
import hoodie from "../assets/imperial-alpaca-hoodie.webp"
import { Input} from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import Link from "next/link"

const Unique = () => {
  return (
   <section className="px-6 md:px-10 lg:px-20  ">

    <div className=" grid justify-end">
<h2 className="w-auto md:w-[500px] mt-3 text-3xl md:text-5xl font-bold">Unique and Authentic Vintage Designer Jewellery</h2>
    </div>


<div className="flex items-center justify-center lg:justify-evenly flex-col lg:flex-row py-20">
{/* left portion */}

<div className="flex  relative  ">
<div className="grid ">
  <Details header="Using Good Quality Materials" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
  <Details header="Modern Fashion Design" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
</div>

<div className="grid ">
  <Details header="100% Handmade Products" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
  <Details header="Discount for Bulk Orders
" description="Lorem ipsum dolor sit amt, consectetur adipiscing elit." />
</div>

<div className="absolute text-gray-100 -mt-8 lg:mt-8 ml-5 md:ml-7 w-[106px] md:w-40 lg:w-32  text-[90px] md:text-9xl lg:text-[120px] font-bold -z-10 "><h1> Different From Others</h1></div>
</div>

{/* right content */}
<div className="flex flex-col md:flex-row pt-6">
<Image src={hoodie} alt="" className="mx-[5rem] w-[300px] h-[310px] md:w-[320px] md:h-[360px]"/>
<div className="mt-6  md:mt-0 ml-20 md:-ml-6">
<h2 className="text-md font-light text-black w-[300px] md:w-44">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</h2>
<Button className="bg-[#212121] mt-10 px-8 py-4 md:px-4 md:py-6 text-white font-semibold hover:bg-[#212121] border-t-2 border-l-2 border-gray-500"><Link href={`../allproducts`}>
  See All  Products</Link></Button>
</div>
</div>
</div>

{/* subscription section */}
<div className=" text-center grid relative py-20">
    <h3 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight text-[#212121]">Subscribe Our Newsletter</h3>
    <p className="text-lg md:text-xl font-light py-4">Get the latest information and promo offers directly</p> 
    
    <div className="flex  justify-center">
    <Input type="text" placeholder="Input email address" className="w-52 h-8 md:w-[300px] md:h-10 mx-2"/>
    <Button className="bg-[#212121] border-l-2 border-t-2 border-gray-600 w-28 h-8 md:w-32 md:h-10 mx-2 text-white font-medium md:font-bold">
        Get Started
    </Button>
    <div className="absolute -z-10 text-center text-gray-100 font-bold text-7xl -mt-16 md:text-9xl md:-mt-24">Newsletter</div>
    </div>

    
    </div>
   </section>
  )
}

export default Unique