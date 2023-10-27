import React from "react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Home from "./features/Home/Home";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import AdminDashBoard from "./features/AdminDashboard/AdminDashBoard";
import AddHospital from "./features/AdminDashboard/AddHospital";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddBed from "./features/AdminDashboard/AddBed";
import HospitalDetails from "./features/Hospital/HospitalDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/admindashboard",
        element:<AdminDashBoard></AdminDashBoard>,
        children:[
          {
          path:"/admindashboard/addHospital",
          element:<AddHospital></AddHospital>
        },
         {
          path:"/admindashboard/addbed",
          element:<AddBed></AddBed>
        }
      ]

    },
    {
      path:"Details/:id",
      element:<HospitalDetails/>
    },
      {
        path:"",
        element:<Home></Home>
      }
      
    ]
  }
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);
reportWebVitals();