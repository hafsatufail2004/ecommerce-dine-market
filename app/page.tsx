import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import ProductList from "./components/Products";
import { Promotion } from "./components/Promotions";
import Unique from "./components/Unique";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
    <div className="w-auto">

      <Navbar/>
    <Hero/>
    {/* Promotion section */}
    <Promotion/>
    {/* Products section */}
    <ProductList/>
    {/* Unique section */}
     <Unique/>
     <Footer/>
   </div>
    </>
  );
}