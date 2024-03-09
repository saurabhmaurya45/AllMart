import { useEffect, useState } from 'react';
// import ReactDOM from "react-dom/client";
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';


import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AllProductData from "./context/allProducts";
import AllCategories from "./context/allCategories";
import WishList from './context/wishList';
import CartData from './context/cartContext';

export default function App() {
  const [productData, setProductData] = useState({});
  const [allCategories, setAllCategories] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [cartData, setCartData] = useState([]);

  const fetchData1 = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=40");
    const data = await response.json();
    // console.log(data.products[0].id)
    setProductData(data);
  }
  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    // console.log(data.products[0].id)
    setAllCategories(data);
  }
  useEffect(() => {
    fetchData1();
    fetchData();
  }, []);



  return (

    <AllProductData.Provider value={productData}>
      <AllCategories.Provider value={allCategories}>
        <WishList.Provider value={wishList}>
          <CartData.Provider value={cartData}>
            <Provider store={store}>
              <div className="App">
                <Navbar />
                <Outlet />
                <Footer />
              </div>
            </Provider>
          </CartData.Provider>
        </WishList.Provider>
      </AllCategories.Provider>
    </AllProductData.Provider>
  );
}

