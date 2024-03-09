import React, { useEffect, useState } from 'react';
import SingleProduct from '../components/singleproduct/singleproduct';
import { useSearchParams } from 'react-router-dom';
import Filter from '../components/filter/filter';
import { useNavigate } from "react-router-dom";


export default function AllProductPage() {
    const history = useNavigate();
    const [productData, setProductData] = useState([]);
    const [localData, setLocalData] = useState(productData);
    const [queryParameters] = useSearchParams()
    const search = queryParameters.get("search");
    const [selectedCategories, setSelectedCategories] = useState([]);

    const fetchAllProductData = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();
        setLocalData(data.products);
        setProductData(data.products);
    }
    const fetchDataBasedOnSearch = async () => {
        const response = await fetch("https://dummyjson.com/products/search?q=" + search);
        const data = await response.json();
        setLocalData(data.products);
        history('/shop', { replace: true }) 
    }
    const fetchDataBasedOnCategory = ()=>{
        const  filteredData = productData.filter((item)=>{
            return  selectedCategories.includes(item.category) && item 
        })
        setLocalData(filteredData);
        if(selectedCategories.length === 0){
            setLocalData(productData);
        }
    }
    
    useEffect(() => {
        fetchAllProductData();
        if (search !== null) {
            fetchDataBasedOnSearch();
        }
        

    }, [])
    useEffect(()=>{
        fetchDataBasedOnCategory();
    },[selectedCategories])

    

    return (
        <>
            <div className="container-fluid mt-4 ">
                <div className="row">
                    <div className="col-md-3 mt-2 border ">
                        <Filter setSelectedCategories={setSelectedCategories} selectedCategories={selectedCategories}/>
                    </div>
                    <div className="col-md-9 d-flex flex-wrap gap-2  " style={{ justifyContent: "space-evenly" }}>
                        {
                            localData?.map((product) => {

                                return (
                                    <div key={product.id} className=" p-2 border my-2 custom-cart-style">
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
