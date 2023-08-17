'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Products } from '../utils/mock';
import ProductCard from "../shared/productCardList";
import { StaticImageData } from 'next/image';

const ProductList = () => {
  return (
    <section className="px-10 py-6 lg:px-20 lg:py-16  hidden md:block">

        {/* heading section*/}
        <div className="text-center space-y-4 mb-7">
    <p className="text-md font-bold text-blue-700">Products</p>
<h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[#212121]">Check What We Have</h3>
</div>

{/*slider  */}
<Swiper
     
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
    >
      {Products?.map((item) => (
        <SwiperSlide key={item.id}>
        <ProductCard
          key={item.id} 
          img={item.image as StaticImageData}
           title={item.name}
            price={item.price}
            type={item.type}
            id={item.id}/>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
  )
}

export default ProductList;