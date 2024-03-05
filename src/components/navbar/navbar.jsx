import React, {  useContext, useState } from "react";
import logoPath from "../../assets/images/logo.png";
import "../../components/navbar/navbar.css";
import WishList from "../../context/wishList";
import { Link } from "react-router-dom";

function Navbar() {
    const wishList = useContext(WishList);
    console.log(wishList)
    const [wishListLength, setWishListLength] = useState(wishList.length);

    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Shop',
            link: '/shop'
        },
        // {
        //     name: 'New Arrivals',
        //     link: '/'
        // },
        // {
        //     name: 'Featured Products',
        //     link: '/'
        // },
        // {
        //     name: 'Electronics',
        //     link: '/'
        // },
        // {
        //     name: 'Fashions',
        //     link: '/'
        // },
        // {
        //     name: 'Accessories',
        //     link: '/'
        // },
        // {
        //     name: 'Appliances',
        //     link: '/'
        // }
    ];
    return (
        <>
            <div className="main-navbar shadow-sm sticky-top">
                <div className="top-navbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                                <a className="navbar-brand" href="/">
                                    <img src={logoPath} width="50" height="50" alt="" className="rounded" />
                                </a>
                                {/* <h5 className="brand-name">AllMart</h5>  */}
                            </div>

                            <div className="col-md-5 my-auto">
                                <form role="search">
                                    <div className="input-group">
                                        <input type="search" placeholder="Search your product" className="form-control" />
                                        <button className="btn bg-white" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 my-auto">
                                <ul className="nav justify-content-end">

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="fa fa-shopping-cart"></i> Cart (0)
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/wishlist"}>
                                            <i className="fa fa-heart"></i> Wishlist ({wishListLength})
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-user"></i> Username
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-heart"></i> My Wishlist</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-shopping-cart"></i> My Cart</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="/">
                            AllMart
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="container collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    navItems.map((item, index) => {
                                        
                                        return (
                                            <li className="nav-item" key={index}>
                                                <a className="nav-link" href={item.link}>{item.name}</a>
                                            </li>
                                        )
                                    })
                                }


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>



        </>
    );
}


export default Navbar;