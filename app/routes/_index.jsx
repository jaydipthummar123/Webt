// import Header from "../components/Header";
// import Dashboard from "../components/Pages/Dashboard";
// import Sidebar from "../components/Sidebar";

// export default function Index() {
//   return (
//     <>
//      <div  className="flex" >
//      <Sidebar/>  
//      <Header/>

      
//      </div>
//     </>
     
//   );
// }
import Header from "../components/Header";
import Calender from "../components/Pages/Calender";
import Dashboard from "../components/Pages/Dashboard";
import Favorites from "../components/Pages/Favorites";
import Inbox from "../components/Pages/Inbox";
import Orderlist from "../components/Pages/Orderlist";
import Products from "../components/Pages/Products";
import ProductStock from "../components/Pages/ProductStock";


import Sidebar from "../components/Sidebar";

export default function Index() {
  return (
    
    <div className="flex min-h-screen">
      {/* Sidebar - Hidden on small screens */}
      <div className="max-md:hidden">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-grow overflow-hidden">
        <Header />
       <Dashboard />
        {/* <Products/>
        <Favorites/>  */}
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
  );
}


