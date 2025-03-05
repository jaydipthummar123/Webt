import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Calender from '../components/Pages/Calender'

const Calenderpage = () => {
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
        <Calender/>
      
      </div>
    </div>
    </div>
  )
}

export default Calenderpage
