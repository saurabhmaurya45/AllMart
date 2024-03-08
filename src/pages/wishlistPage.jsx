import React, { useContext } from "react";  
import WishList from "../context/wishList";
import SingleProduct from "../components/singleproduct/singleproduct";

export default function WishlistPage() {
    const wishList = localStorage.getItem("wishListData") ? JSON.parse(localStorage.getItem("wishListData")) : [];

    return (
        <>
            <h1 className="text-center">WishList</h1>
            <div className="container-fluid m-3 ">
                <div className="d-flex">
                    <div className="col-md-12  d-flex justify-items-center flex-wrap  gap-4">
                            {
                                wishList?.map((product) => {
                                    return (
                                        <div key={product.id} className=" p-2 border" style={{width:"23%"}}>
                                            <SingleProduct SingleProduct={product} />
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
