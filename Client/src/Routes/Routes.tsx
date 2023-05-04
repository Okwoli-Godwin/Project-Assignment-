import React, { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { Homelayout } from "../components/Layout/Home"
import Homescreen from "../Pages/Landingpage/Homescreen"
export const Elements = createBrowserRouter([
    {
    path: "/",
    element: <Homelayout />,
    children: [
      {
        index: true,
        element: <Homescreen/>,
      },
    ],
  },
])