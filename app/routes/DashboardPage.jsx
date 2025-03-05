import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Products from '../components/Pages/Products'

const DashboardPage = () => {
  return (
    <div>
       <div className="flex min-h-screen">
      {/* Sidebar - Hidden on small screens */}
      <div className="max-md:hidden">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-grow overflow-hidden">
        <Header />
        {/* {/* <Dashboard /> */}
       <Products/>
        {/* <Favorites/>  */}
        {/* <Inbox></Inbox> */}
        {/* <Orderlist/> */}
        {/* <ProductStock/> */}
        {/* <Calender/> */}
{/* 
        <div className="relative bg-[#D4D4D4] overflow-hidden min-h-screen">
          {/* Scrollable Content */}
          {/* <div className="relative z-10 max-h-screen overflow-y-auto hide-scrollbar">
         <Dashboard/>
          </div>
        </div> */} 
      </div>
    </div>
    </div>
  )
}

export default DashboardPage
