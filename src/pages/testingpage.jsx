
import { useState } from "react";

export default function TestingPage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99
    },
    {
      id: 2,
      name: "Product 2",
      price: 5.99
    },
    {
      id: 3,
      name: "Product 3",
      price: 15.99
    },
    {
      id: 4,
      name: "Product 4",
      price: 7.99
    },
    {
      id: 5,
      name: "Product 5",
      price: 12.99
    }
  ];

  // the thing is  that Array.sort() method doesn't return new reference, it returns the same reference, so, usestate ko pata hi nahi chalta ki data me change bhi hua hai.so, we need to pass a new array with new reference every time we call setter function.

  const [showProductList, setShowProductList] = useState(products);

  const setLowToHigh = () => {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    setShowProductList([...sortedProducts]);
  };
  const setHighToLow = () => {
    const reverseSortedProducts = products.sort((a, b) => b.price - a.price);
    setShowProductList([...reverseSortedProducts]);
  };
  const restList = () => {
    const resetList = products;
    setShowProductList([...resetList]);
  };
  return (
    <div className="App">
      <h1>Product List</h1>
      Price: <button onClick={setLowToHigh}>Low To High</button>
      <button onClick={setHighToLow}>High To Low</button>
      <button onClick={restList}>reset</button>
      <ol style={{ listStyle: "none" }}>
        {console.log("product list", { list: showProductList })}
        {showProductList.map(({ name, price, id }) => (
          <li key={id}>
            {name} : INR {price}
          </li>
        ))}
      </ol>
    </div>
  );
}
