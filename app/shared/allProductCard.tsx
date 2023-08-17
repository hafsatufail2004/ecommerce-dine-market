import Image, {StaticImageData} from "next/image"
import Link from "next/link";
function AllProductCard(props:{title:string,price:string,img:StaticImageData,type?:string,id:number}){
  return (
    <Link href={`/products/${props.id}`}>
    <div className="py-5 justify-self-auto">
        <Image src={props.img} alt="" className='bg-gray-300 w-[150px] h-[170px]   md:w-[250px] md:h-[270px]'/>
        <h3 className="text-sm line-clamp-2 hidden md:block md:text-lg font-bold mt-3 mb-1 ">{props.title}</h3>

     <h2 className="block md:hidden text-xs font-bold mt-2 mb-2 line-clamp-2 max-w-[200px]">{props.title}</h2>
        
        <h4 className="text-xs md:text-md  font-bold text-slate-400">{props.type}</h4>
        <p className="text-xs md:text-md font-bold mt-1">{props.price}</p>
    </div>
    </Link>
  )
}

export default AllProductCard;