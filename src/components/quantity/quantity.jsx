import React, { useContext, useEffect } from "react";
import { useState } from "react";
import CartData from "../../context/cartContext";

export default function Quantity(props) {
    const product = props.product;
    const [quantity, setQuantity] = useState(product.quantity ? product.quantity : 1);
    const products = localStorage.getItem('cartData') ? JSON.parse(localStorage.getItem('cartData')) : [];

    const productFind = products.find((item) => item.id === product.id);

    const updateLocalStorageCart = ()=>{
        localStorage.setItem('cartData', JSON.stringify(products));
        setQuantity(productFind.quantity);
    }

    const handleMinusButton = () => {
        productFind.quantity = quantity - 1 > 0 ? (quantity - 1) : 1;
        updateLocalStorageCart();

    }
    const handlePlusButton = () => {
        productFind.quantity = quantity < product.stock ? quantity + 1 : quantity;
        updateLocalStorageCart();
    }

    useEffect(() => {
        props.updateCartHandler();
    }, [quantity]);

    return (
        <>
            <div className="col-md-4 col-6 mb-3">
                <label className="mb-2 d-block">Quantity</label>
                <div className="input-group mb-3" style={{ width: "170px" }}>
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={() => (handleMinusButton())}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <input type="text" className="form-control text-center border border-secondary" value={quantity} aria-label="Example text with button addon" aria-describedby="button-addon1" />
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={() => (handlePlusButton())}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </>
    )
}