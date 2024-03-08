import React, { useEffect } from 'react';
import { useState } from 'react';
import Quantity from '../quantity/quantity';


export default function CartItem(props) {
    const product = props.product;

    const [cart, setCart] = useState(localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : []);
    const [wishList, setWishList] = useState(localStorage.getItem('wishListData') ? JSON.parse(localStorage.getItem('wishListData')) : []);


    const wishListHandler = (data) => {
        // Retrieve existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('wishListData')) || [];

        let updatedData = [];

        if (!(existingData.find(item => item.id === data.id))) {
            updatedData = [...existingData, data];

            // Save the updated data back to local storage
            localStorage.setItem('wishListData', JSON.stringify(updatedData));
            deleteButtomHandler(data);
        }

        // Update state with the new data
        setWishList(updatedData);
        
    }

    const deleteButtomHandler = (data) => {
        // Retrieve existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('cartData')) || [];

        let updatedData = existingData.filter(item => item.id !== data.id);

        // Save the updated data back to local storage
        localStorage.setItem('cartData', JSON.stringify(updatedData));

        // Update state with the new data
        setCart(updatedData);
    }

    useEffect(() => {
        props.updateCartHandler();
    },[cart, wishList])

    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={product?.thumbnail} className="w-100" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                        </a>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 mb-lg-0">
                    <p><strong>{product.title}</strong></p>
                    <p>Brand: {product.brand}</p>
                    <p>Category: {product.category}</p>
                    <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item" onClick={() => (deleteButtomHandler(product))}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list" onClick={() => (wishListHandler(product))}>
                        <i className="fas fa-heart"></i>
                    </button>
                </div>

                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="d-flex" style={{ maxWidth: "300px" }}>
                        <Quantity product={product} updateCartHandler={props.updateCartHandler}/>

                    </div>
                    <p className="text-start text-md-center"><strong>Rs.{product.price}</strong></p>
                </div>
            </div>
            <hr className="my-4" />
        </>
    )
}