import { StaticImageData } from "next/image"
import AllProductCard from "../../shared/allProductCard"
import {Products} from "../../utils/mock"
import Navbar from "@/app/components/Navbar"; 
import Footer from "@/app/components/Footer";

const getProductByCatogery = (catogery:string) => {
 return Products.filter((product) => product.catogery === catogery)
};

export default function Page({ params }: { params: { slug: string } }) {
    
  const result = getProductByCatogery(params.slug);

  return <>
  <Navbar/>
   <div className="flex mt-6 flex-wrap px-6 justify-around">

{
result.length>0 ?result.map((product) => (
        <AllProductCard
         key={product.id} 
         img={product.image as StaticImageData}
          title={product.name}
           price={product.price}
           type={product.type}
           id={product.id}/>
      )):  <p>No Products Found</p>
      
      
      }
  </div>
  <Footer/>
  </>
  }