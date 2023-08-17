import { StaticImageData } from "next/image"
import AllProductCard from "../shared/allProductCard"
import {Products} from "../utils/mock"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"



const AllProducts = () => {
  return (
  <>
  <Navbar/>
  <div className="px-10 py-20">
<div className="flex justify-evenly flex-wrap ">
{
   Products.map((product) => (
      <AllProductCard
       key={product.id} 
       img={product.image as StaticImageData}
        title={product.name}
         price={product.price}
         type={product.type}
         id={product.id}/>
       
    ))}
</div>
</div>
<Footer/>
</>
  )
}

export default AllProducts