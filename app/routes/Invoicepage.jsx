import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Invoice from '../components/Pages/Invoice'
const Invoicepage = () => {
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
      <Invoice/>
      
      </div>
    </div>
      
    </div>
  )
}

export default Invoicepage
