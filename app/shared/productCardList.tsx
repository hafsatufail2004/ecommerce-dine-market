import Image, {StaticImageData} from "next/image"
import Link from "next/link";
function ProductCard(props:{title:string,price:string,img:StaticImageData, type?:string,id:number}){
  return (
    <Link href={`/products/${props.id}`}>
    <div className="py-5 duration-500 overflow-hidden hover:scale-110">
        <Image src={props.img} alt="" className='bg-[#efe1c7] w-[300px] h-[330px] lg:w-[375px] lg:h-[390px]'/>
        <h3 className="text-md md:text-xl font-bold line-clamp-1 pt-4 pb-2">{props.title}</h3>
        <h4 className="text-md md:text-xl font-bold line-clamp-1 text-slate-400">{props.type}</h4>
        <p className="text-md md:text-xl font-bold pt-4 pb-2">{props.price}</p>
    </div>
    </Link>
  )
}

export default ProductCard;