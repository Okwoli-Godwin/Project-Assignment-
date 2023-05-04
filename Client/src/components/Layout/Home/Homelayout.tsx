import React from 'react'
import { Header, Footer } from '../../Blocks'
import {Outlet} from "react-router-dom"

const Homelayout = () => {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export default Homelayout