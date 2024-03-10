import { useEffect, useState } from 'react';
// import ReactDOM from "react-dom/client";
import { Outlet } from 'react-router-dom';



import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import AllProductData from "./context/allProducts";
import AllCategories from "./context/allCategories";


export default function App() {
  const [productData, setProductData] = useState({});
  const [allCategories, setAllCategories] = useState([]);

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
        
            
              <div className="App">
                <Navbar />
                <Outlet />
                <Footer />
              </div>
            
          
      </AllCategories.Provider>
    </AllProductData.Provider>
  );
}

