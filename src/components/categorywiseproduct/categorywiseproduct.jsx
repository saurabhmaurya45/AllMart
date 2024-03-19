import React, { useEffect, useState } from 'react';
import './categorywiseproduct.css';
import SingleProduct from '../singleproduct/singleproduct';
import Skeleton from 'react-loading-skeleton';

export default function CategoryWiseProduct() {
    const [productData, setProductData] = useState(null);

    // Fetch products from API
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=40");
        const data = await response.json();
        setProductData(data);
    }

    // Group products by category
    const groupedProducts = {};

    productData?.products && productData.products.forEach((product) => {
        if (!groupedProducts[product.category]) {
            groupedProducts[product.category] = [];
        }
        groupedProducts[product.category].push(product);
    });

    // Split products into chunks of four
    const chunkedProducts = {};

    groupedProducts && Object.keys(groupedProducts).forEach(category => {
        chunkedProducts[category] = [];
        const productsInCategory = groupedProducts[category];
        for (let i = 0; i < productsInCategory.length; i += 4) {
            chunkedProducts[category].push(productsInCategory.slice(i, i + 4));
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>
                {productData ? (
                    Object.keys(chunkedProducts).map((category, index) => (
                        <div className="container" id="category-wise-product-corousel" key={"category" + index}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Trending <b>{category}</b></h2>
                                    <div id={category} className="carousel slide" data-ride="carousel" data-interval="0">
                                        <div className="carousel-inner">
                                            {chunkedProducts[category].map((productChunk, chunkIndex) => (
                                                <div className={chunkIndex === 0 ? "carousel-item active" : "carousel-item"} key={"productChunk" + chunkIndex}>
                                                    <div className="row">
                                                        {productChunk.map((product, productIndex) => (
                                                            <div className="col-md-3 col-sm-6" key={"product" + productIndex}>
                                                                <SingleProduct SingleProduct={product} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <a className="carousel-control-prev" href={"#" + category} data-slide="prev">
                                            <i className="fa fa-angle-left"></i>
                                        </a>
                                        <a className="carousel-control-next" href={"#" + category} data-slide="next">
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    // Display skeleton loading while fetching data
                    <div className="container">
                        <div className="d-flex justify-evenly gap-4 m-2">
                            {
                                Array.from({ length: 4 }).map((_, index) => (
                                    <>
                                        <div key={index}>
                                            <Skeleton height={300} width={300} />
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
