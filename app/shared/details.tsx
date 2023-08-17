import { FC } from "react";

interface IProp{
    header:string;
    description:string;
    
    }
    
    const Details:FC<IProp> = ({header,description}) => {
      return (
        <div className=" box-border w-[180px] h-[165px] md:w-[250px] lg:w-[180px]  mx-5 my-2 md:mx-10 md:my-5  text-[#212121]">
            <h4 className="font-bold text-lg md:text-xl">{header}</h4>
    <p className="mt-2 text-gray-950 z-0 text-md md:text-lg font-light">{description}</p>
        </div>
      )
    }
    
    export default Details;