import { StaticImageData } from "next/image";

export type Product = {
    type: string | undefined;
    id : number;
    name : string;
    catogery? : string;
    price : string;
    image : StaticImageData;
}