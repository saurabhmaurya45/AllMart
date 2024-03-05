import React from 'react';
import { useContext } from 'react';
import Filter from '../components/filter/filter';
import AllProductData from '../context/allProducts';
import SingleProduct from '../components/singleproduct/singleproduct';
import RelatedProduct from '../components/relatedProduct/relatedProduct';


export default function AllProductPage() {
    const productData = useContext(AllProductData);
    // console.log(productData.products);
    return (
        <>
            <div className="container-fluid m-3 ">
                <div className="d-flex">
                    {/* <div className="col-md-2">
                        <Filter  />
                    </div>  */}
                    <div className="col-md-12  d-flex justify-items-center flex-wrap  gap-4">
                            {
                                productData.products?.map((product) => {
                                    console.log(product.id);
                                    return (
                                        <div key={product.id} className=" p-2 border" style={{width:"23%"}}>
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
