import React from "react";
import { createBrowserRouter} from "react-router-dom";

import Home from "../pages/home";
import TestingPage from "../pages/testingpage";
import App from "../App";
import ErrorPage from "../pages/errorpage";
import SingleProductPage from "../pages/singleproductpage";
import AllProductPage from "../pages/allproductpage";
import ShoppingCartPage from "../pages/shoppingcartpage";
import WishlistPage from "../pages/wishlistPage";

const appRoutes = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/singleproduct/:id",
        element : <SingleProductPage />
      },
      {
        path : "/shop",
        element : <AllProductPage/>
      },
      {
        path : "/cart",
        element : <ShoppingCartPage />
      },
      {
        path : "/wishlist",
        element : <WishlistPage />
      },
      {
        path : "/testing",
        element : <TestingPage />
      }
    ],
    errorElement : <ErrorPage />
  }
]);

export default appRoutes;
