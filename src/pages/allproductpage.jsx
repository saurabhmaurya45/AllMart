import React, { useEffect, useState } from 'react';
import SingleProduct from '../components/singleproduct/singleproduct';
import { useSearchParams } from 'react-router-dom';
import Filter from '../components/filter/filter';
import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

export default function AllProductPage() {
    const navigate = useNavigate();
    const [isSearch, setIsSearch] = useState(false);
    const [loading, setLoading] = useState(true); // State to manage loading
    const [productData, setProductData] = useState([]);
    const [localData, setLocalData] = useState([]);
    const [localDataOnSearch, setLocalDataOnSearch] = useState([]);
    const [queryParameters] = useSearchParams()
    const [search, setSearch] = useState(queryParameters.get('search'));
    const [selectedCategories, setSelectedCategories] = useState([]);

    const fetchAllProductData = async () => {
        setLoading(true); // Set loading to true while fetching data
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        setLocalData(data.products);
        setProductData(data.products);
        setLoading(false); // Set loading to false after data is fetched
    }

    const fetchDataBasedOnSearch = async () => {
        setLoading(true); // Set loading to true while fetching data
        const response = await fetch("https://dummyjson.com/products/search?q=" + search);
        const data = await response.json();
        setLocalDataOnSearch(data.products);
        setIsSearch(true);
        setLoading(false); // Set loading to false after data is fetched
    }

    const fetchDataBasedOnCategory = () => {
        if (isSearch) {
            setIsSearch(false);
            setSearch(null);
            navigate("/shop");
        }
        const filteredData = productData?.filter((item) =>
            selectedCategories?.includes(item?.category) && item
        )
        setLocalData(filteredData);
        if (selectedCategories?.length === 0) {
            setLocalData(productData);
            // setSearch(queryParameters.get('search')? queryParameters.get('search'):null);
        }
    }

    useEffect(() => {
        fetchAllProductData();
        if (search !== null) {
            fetchDataBasedOnSearch();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchDataBasedOnCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategories])

    return (
        <>
            <div className="container-fluid mt-4 ">
                <div className="row">
                    <div className="col-md-3 mt-2 border ">
                        <Filter setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories} />
                    </div>
                    <div className="col-md-9 d-flex flex-wrap gap-2  " style={{ justifyContent: "space-evenly" }}>

                        {loading ? ( // Render skeleton or actual content based on loading state
                            // Skeleton loading markup
                            Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="p-2 border my-2 custom-cart-style" style={{ width: '200px', height: '200px' }}>
                                    <Skeleton height={200} />
                                </div>
                            ))
                        ) : (
                            // Actual content markup
                            (isSearch ? localDataOnSearch : localData)?.map((product) => (
                                <div key={product.id} className=" p-2 border my-2 custom-cart-style">
                                    <SingleProduct SingleProduct={product} />
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}
