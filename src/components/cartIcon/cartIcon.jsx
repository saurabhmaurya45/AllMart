import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { cartLength } from "../../contextApi/navbarValues";

export default function CartIcon(props) {
    const [cartLengthValue,setCartLengthValue] = useContext(cartLength);
    const singleProductData = props.singleProductData;
    

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
            setCartLengthValue(cartLengthValue+1);
        }

        // Save the updated data back to local storage
        localStorage.setItem('cartData', JSON.stringify(updatedData));

        
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