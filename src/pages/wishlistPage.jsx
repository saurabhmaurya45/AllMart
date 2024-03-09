import React, { useContext, useEffect, useState } from "react";  
import SingleProduct from "../components/singleproduct/singleproduct";

export default function WishlistPage() {
    const [wishList,setWishList] = useState(localStorage.getItem("wishListData") ? JSON.parse(localStorage.getItem("wishListData")) : []);
    const [updateWishList, setUpdateWishList] = useState(0);

    useEffect(() => {
        setWishList(localStorage.getItem("wishListData") ? JSON.parse(localStorage.getItem("wishListData")) : []);
    }, [updateWishList]);

    return (
        <>
            <h1 className="text-center">WishList</h1>
            <div className="container-fluid my-3 ">
                <div className="d-flex">
                    <div className="col-md-12  d-flex justify-items-center flex-wrap  gap-4">
                            {
                                wishList?.map((product) => {
                                    return (
                                        <div key={product.id} className=" p-2 border" >
                                            <SingleProduct SingleProduct={product}  setUpdateWishList={setUpdateWishList}/>
                                        </div>
                                    )
                                })
                            }
                       
                    </div>
                </div>
            </div>
        </>
    )
}   
