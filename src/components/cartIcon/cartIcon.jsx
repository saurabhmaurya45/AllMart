import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function CartIcon(props) {
    const singleProductData = props.singleProductData;
    const [cart, setCart] = useState([]);

    const addDataToLocalStorage = (data) => {
        // Retrieve existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('cartData')) || [];

        let updatedData = [];

        // Modify the existing data by adding newData
        if (existingData.find(item => item.id === data.id)) {
            alert("Item already in cart");
            return;
        } else {
            updatedData = [...existingData, {...data,"quantity":1}];
        }

        // Save the updated data back to local storage
        localStorage.setItem('cartData', JSON.stringify(updatedData));

        // Update state with the new data
        setCart(updatedData);
    };

    const cartHandler = (data) => {
        addDataToLocalStorage(data);
    }



    return (
        <>
            <Link onClick={() => (cartHandler(singleProductData))}><i className="fa-solid fa-cart-plus"></i></Link>
        </>
    )
}