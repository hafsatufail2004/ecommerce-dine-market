"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import * as React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import logo from "../assets/Logo.webp";

export default function NavigationMenuDemo() {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  return (
    <>
{/* small screen */}
<div className="block lg:hidden">
  <div className="flex justify-between ">
  <Image src={logo} alt="logo" className="my-5 mx-5" width={100} height={100}/>
  <Button id="hamburger-button" className="text-3xl hover:bg-[#fcfcfc] mt-4 text-black bg-white md:hidden cursor-pointer relative w-8 h-8 px-12 py-6">
      <Link href={"../hamburger"}>   &#9776; </Link>
 </Button>
 </div>
</div>


{/* full screen navbar */}
    <div className="hidden lg:block sticky top-0 z-10">
    <nav className="flex py-4 w-full items-center justify-around bg-white">
      {/* Logo  */}
      <Image src={logo} alt="logo" height={120} width={120} />
      {/* Navgation  */}
      <div className=" w-2/4 font-medium text-5xl">
        <NavigationMenu>
          <NavigationMenuList>
            {/* home */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
               Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Female  */}
            <NavigationMenuItem>
              <Link href={"catogery/female"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Female
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Male  */}
            <NavigationMenuItem>
              <Link href={"catogery/male"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Male
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* Kids  */}
            <NavigationMenuItem>
              <Link href={"catogery/kids"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kids
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* All Products  */}

            <NavigationMenuItem>
              <Link href="/allproducts" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Searchbar  */}
      <div className=" w-[20%]">
        <Input type="text" placeholder="What you looking for" />
      </div>
       {/* <input /> */}
       <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center relative">
        <span className="absolute right-1 top-0 rounded-full bg-red-500 h-5 w-5 text-white text-sx text-center">
          {cartValue}
        </span>
        <ShoppingCart className="h-6 w-6" />
      </div>
    
    </nav>
    </div>
    </>
  );
}