import React from "react";
import CorouselImages from "../../constants/corouselImages";

import "../../components/corousel/corousel.css";

export default function Corousel() {

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">

            <div className="carousel-inner">
                <div className="carousel-item active" key={0}>
                    <img src={CorouselImages[0]} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        {/* <div className="custom-carousel-content">
                        <h1>
                            <span>Best Ecommerce Solutions 1 </span>
                            to Boost your Brand Name &amp; Sales
                        </h1>
                        <p>
                            We offer an industry-driven and successful digital marketing strategy that helps our clients
                            in achieving a strong online presence and maximum company profit.
                        </p>
                        <div>
                            <a href="#" className="btn btn-slider">
                                Get Now
                            </a>
                        </div>
                    </div> */}
                    </div>
                </div>
                {
                    CorouselImages.map((img, index) => {
                        if (index > 0) {
                            return (
                                <div className="carousel-item" key={index}>
                                    <img src={img} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        {/* <div className="custom-carousel-content">
                                        <h1>
                                            <span>Best Ecommerce Solutions 1 </span>
                                            to Boost your Brand Name &amp; Sales
                                        </h1>
                                        <p>
                                            We offer an industry-driven and successful digital marketing strategy that helps our clients
                                            in achieving a strong online presence and maximum company profit.
                                        </p>
                                        <div>
                                            <a href="#" className="btn btn-slider">
                                                Get Now
                                            </a>
                                        </div>
                                    </div> */}
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                }


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}