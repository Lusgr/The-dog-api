import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import MainPage from "./MainPage"
import Favorites from "./Favorites";
import ToDos from './ToDos';
 

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path:"",
          element:<MainPage/>
        },
        {
          path: "favorites",
          element: <Favorites/>
        },
        {
          path: "toDos",
          element: <ToDos/>
        },
        
      ]
    },
  ]);

  const Pages = () =>  {
    return (
        <RouterProvider router={router} />
    )
  } 

  export default Pages


    

