import React from "react";
import { useState,useContext } from "react";
import WishList from "../../context/wishList";


export default function WishListHeart(props) {
    const singleProductData  = props.singleProductData;
    const wishList = useContext(WishList);
    const [isSet, setIsSet] = useState(false);
    
    const handleWishList = (data) => {
        if (wishList.includes(data)) {
            wishList.splice(wishList.indexOf(data), 1);
            setIsSet(false);
            return;
        }
        wishList.push(data);
        setIsSet(true);
    }
    return (
        <div>
            <a className={"product-like-icon " + (isSet ? "text-danger" : "")} data-tip={(isSet ? "Remove from" : "Add to") + " Wishlist"} onClick={() => (handleWishList(singleProductData))}>
                <i className={(isSet ? "fa-solid" : "fa-regular") + " fa-heart"}></i>
            </a>
        </div>
    )
}