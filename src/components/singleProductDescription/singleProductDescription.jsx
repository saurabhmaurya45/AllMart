import React from "react";
import Quantity from "../quantity/quantity";
import "./singleProductDescription.css";

export default function SingleProductDescription(props) {
    // console.log(props.product);

    return (
        <>
            <main className="col-lg-6 singleProductDescription">
                <div className="ps-lg-3">
                    <div className="">
                        <h4 className="title text-dark ">
                            {props.product && props.product.title}
                        </h4>
                    </div>
                    <div className="d-flex flex-row my-3">
                        <div className="text-warning mb-1 me-2">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <span className="ms-1">
                                {props.product && parseFloat(props.product.rating)}
                            </span>

                        </div>
                        <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{props.product && props.product.stock} orders</span>
                        <span className="text-success ms-2">In stock</span>
                    </div>
                    <div className="mb-3 ">
                        <span className="h6 px-2 text-decoration-line-through" style={{ color: "red" }}>Rs.{props.product && props.product.price + Math.round(props.product.price * props.product.discountPercentage / 100)}</span>
                        <span className="h5">Rs.{props.product && props.product.price}</span>
                        {/* <span className="text-muted">/per box</span> */}
                    </div>
                    <p>
                        {props.product && props.product.description}
                    </p>
                    <div className="row">
                        <dt className="col-3">Category:</dt>
                        <dd className="col-9">{props.product && props.product.category}</dd>

                        <dt className="col-3">Brand</dt>
                        <dd className="col-9">{props.product && props.product.brand}</dd>
                    </div>
                    <hr />
                    <form>
                        <Quantity stock={props.product ? props.product.stock : "No stock"} />
                        <div className="d-flex justify-start gap-2" >
                            <a href="#" className="btn btn-warning shadow-0 px-4 py-2 "> Buy now </a>
                            <a href="#" className="btn btn-primary shadow-0 px-4 py-2 "> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                            <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3 "> <i className="me-1 fa fa-heart fa-lg"></i> Save </a>

                        </div>
                    </form>
                </div>
            </main>


        </>
    )
}