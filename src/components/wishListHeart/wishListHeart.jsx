import React, { useEffect, useState } from "react";

export default function WishListHeart(props) {
    const { singleProductData } = props;
    const [wishList, setWishList] = useState([]);
    const [wishListLocalStorageData, setWishListLocalStorageData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('wishListData'));
        return localData ? localData : [];

    });
    const [isExist, setIsExist] = useState(false);

    const addDataToLocalStorage = (data) => {
        // Retrieve existing data from local storage
        const existingData = JSON.parse(localStorage.getItem('wishListData')) || [];

        let updatedData = [];

        // Modify the existing data by adding newData
        if (existingData.find(item => item.id === data.id)) {
            updatedData = [...existingData.filter(item => item.id !== data.id)];
        } else {
            updatedData = [...existingData, data];
        }

        // Save the updated data back to local storage
        localStorage.setItem('wishListData', JSON.stringify(updatedData));

        // Update state with the new data
        setWishList(updatedData);
    };

    const handleWishList = (data) => {
        addDataToLocalStorage(data);
    };

    // Update local storage when wish list changes
    useEffect(() => {
        // Retrieve data from local storage when component mounts
        const existingData = JSON.parse(localStorage.getItem('wishListData')) || [];
        setWishListLocalStorageData(existingData);
    }, [wishList]);

    //updating isExist state when local storage changes
    useEffect(() => {
        setIsExist((wishListLocalStorageData.find(item => item.id === singleProductData.id)) ? true : false);
    }, [wishListLocalStorageData]);



    return (
        <div>
            <a
                className={"product-like-icon " + (isExist ? "text-danger" : "")}
                data-tip={(isExist ? "Remove from" : "Add to") + " Wishlist"}
                onClick={() => handleWishList(singleProductData)}>
                <i className={(isExist ? "fa-solid" : "fa-regular") + " fa-heart"}></i>
            </a>
        </div>
    );
}
