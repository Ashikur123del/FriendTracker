import React from 'react'
import Navbar from '../Components/ShearCompo/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/ShearCompo/Footer'

const Root = () => {
  return (
    <div>
        <Navbar />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Root