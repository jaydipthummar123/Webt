import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Contect from '../components/Pages/Contect'
const Contectpage = () => {
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
        <Contect/>
      
      </div>
    </div>
    </div>
  )
}

export default Contectpage
