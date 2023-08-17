"use client";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slice/cart.Slice";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product added");
  };
  return <div className="bg-[#212121] border-t-2 border-l-2 border-gray-500"><Button onClick={addItem}>Add to Cart</Button></div>;
};
export default AddToCart;