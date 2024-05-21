import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/HomePage/Home";
import Menu from "../Pages/MenuPage/Menu/Menu";
import Order from "../Pages/Order/Order/Order";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:"/menu",
            element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        }
      ]
    },
  ]);