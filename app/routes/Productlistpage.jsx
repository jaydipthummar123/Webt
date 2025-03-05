import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import ProductStock from '../components/Pages/ProductStock'
const Productlistpage = () => {
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
      <ProductStock/>
      </div>
    </div>
    </div>
  )
}

export default Productlistpage
