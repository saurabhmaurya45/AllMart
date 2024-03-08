import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./singleproduct.css";
import WishListHeart from "../wishListHeart/wishListHeart";
import CartIcon from "../cartIcon/cartIcon";



export default function SingleProduct(props) {
    const [singleProductData, setSingleProductData] = useState(props.SingleProduct);
    
    return (
        <div className="product-grid">
            <div className="product-image">
                <Link to={"/singleproduct/" + singleProductData?.id} className="image">
                    <img className="pic-1" src={(singleProductData.images[1] ? singleProductData.images[1] : singleProductData.images[0])} />
                    <img className="pic-2" src={singleProductData.images[2] ? singleProductData.images[2] : singleProductData.images[0]} />
                </Link>
                <WishListHeart singleProductData={singleProductData?singleProductData: "No data"} key={singleProductData?.id}/>
                
                <ul className="product-links">
                    <li><Link to={"/singleproduct/" + singleProductData?.id}><i className="fa fa-search"></i></Link></li>
                    <li>
                        <CartIcon singleProductData={singleProductData} />
                    </li>
                    {/* <li><a href="#"><i className="fa fa-random"></i></a></li> */}
                </ul>
            </div>
            <div className="product-content">
                <h3 className="title"><Link to={"/singleproduct/" + singleProductData?.id}>{singleProductData.title && singleProductData.title}</Link></h3>
                <div className="price">${singleProductData.price && singleProductData.price}</div>
            </div>
        </div>

    )
}