import React from 'react';
import { useState, useEffect } from 'react';
import {  redirect, useParams } from 'react-router-dom';
import SingleProductImages from '../components/singleProductImages/singleProductImges';
import SingleProductDescription from '../components/singleProductDescription/singleProductDescription';
import SingleProduct from '../components/singleproduct/singleproduct';


function SingleProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProduct, setSimilarProduct] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setProduct(jsonData);
            fetchSimilarProduct(jsonData?.category);
        }
        catch (error) {
            redirect('/error');
        }
    };
    const fetchSimilarProduct = async (category) => {
        try {
            const response = await fetch("https://dummyjson.com/products/category/" + category);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setSimilarProduct(jsonData?.products);
        }
        catch (error) {
            redirect('/error');
        }

    };
    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            <section className="py-5" >
                <div className="container">
                    <div className="row gx-5">
                        {product && (
                            <SingleProductImages images={product.images} thumbnail={product.thumbnail} />
                        )}
                        <SingleProductDescription product={product} />
                    </div>

                </div>
            </section>

            <section className="py-5">
                <div className="container-fluid">
                    <h2 className="mb-5 text-left">Related Products</h2>
                    <div className="d-flex flex-wrap justify-evenly gap-3">
                        {
                            similarProduct?.map((item, index) => {
                                if (product.id !== item.id) {
                                    return (
                                        <div className=" border" key={index} >
                                            <SingleProduct SingleProduct={item} />
                                        </div>
                                    ) 
                                }
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default SingleProductPage;