import React, { useEffect, useState } from 'react';
import './categorywiseproduct.css';
import SingleProduct from '../singleproduct/singleproduct';

export default function CategoryWiseProduct() {
    const [productData, setProductData] = useState([])


    // Fetch products from API
    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/products?limit=40");
        const data = await response.json();
        // console.log(data.products[0].id)
        setProductData(data);
      }
    // Group products by category
    const groupedProducts = {};

    productData.products && productData.products.forEach((product) => {
        if (!groupedProducts[product.category]) {
            groupedProducts[product.category] = [];
        }
        groupedProducts[product.category].push(product);
    })
    // console.log(groupedProducts)

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
                {chunkedProducts && Object.keys(chunkedProducts).map((category, index) => {
                    return (
                        <div className="container" id="category-wise-product-corousel" key={"category" + index}>
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Trending <b>{category}</b></h2>
                                    <div id={category} className="carousel slide" data-ride="carousel" data-interval="0">

                                        {/* <ol className="carousel-indicators">
                                            <li data-target={"#"+category} data-slide-to="0" className="active"></li>
                                            <li data-target={"#"+category} data-slide-to="1"></li>
                                        </ol> */}

                                        <div className="carousel-inner">
                                            {
                                                chunkedProducts[category].map((productChunk, index) => {
                                                    
                                                    return (
                                                        <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={"productChunk" + index}>
                                                            <div className="row">

                                                                {
                                                                    productChunk.map((product, index) => {
                                                                        return (
                                                                            <>
                                                                            <div className="col-md-3 col-sm-6" key={"product" + index}>
                                                                            <SingleProduct SingleProduct={product} />
                                                                            </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }


                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

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
                    )
                })}
            </div>

        </>
    )
}