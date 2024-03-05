import React, { useContext } from "react";  
import WishList from "../context/wishList";

export default function Wishlist() {
    const wishList = useContext(WishList);
    console.log(wishList);

  return (
    <div>
      <h1>Wishlist</h1>
    </div>
  );
}   
