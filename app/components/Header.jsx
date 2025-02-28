
import flag from "../images/Flag.jpg";
import dp from "../images/man-438081_960_720.jpg";
import more from "../images/More.jpg";

const Header = () => {
  return (
    <div className="bg-white shadow-md w-full h-[70px]">
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        
        
        <div className="flex items-center gap-4 md:gap-6">
   
          <button className="block md:hidden">
            <svg width="24" height="24" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 0.5625H17.25V1.9375H0.75V0.5625ZM0.75 6.0625H17.25V7.4375H0.75V6.0625ZM0.75 11.5625H17.25V12.9375H0.75V11.5625Z" fill="#202224"/>
            </svg>
          </button>

          <div className="w-[200px] sm:w-[300px] md:w-[400px] bg-[#F5F6FA] flex items-center px-3 py-2 rounded-full">
            <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.3902 11.3896L15.5556 15.5555" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F5F6FA] focus:outline-none w-full pl-2 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 md:gap-7">
       
          <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.0277 5C7.73472 5 5.80843 6.72411 5.55522 9.00306L4.5 18.5H1.5C0.671573 18.5 0 19.1716 0 20V21.5C0 22.3284 0.671573 23 1.5 23H22.5C23.3284 23 24 22.3284 24 21.5V20C24 19.1716 23.3284 18.5 22.5 18.5H19.5L18.4448 9.00306C18.1916 6.72411 16.2653 5 13.9723 5H10.0277Z" fill="#4880FF"/>
            <rect opacity="0.3" x="9" y="24.5" width="6" height="6" rx="2.25" fill="#FF0000"/>
          </svg>

         
          <div className="flex items-center gap-3">
            <img src={flag} alt="Flag" className="w-6 h-4"/>
            <p className="font-semibold text-sm hidden sm:block">English</p>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00002 3.92503L1.9125 0.837511C1.68469 0.609705 1.31535 0.609705 1.08754 0.837511C0.859736 1.06532 0.859736 1.43466 1.08754 1.66247L4.58754 5.16247C4.81535 5.39027 5.18469 5.39027 5.4125 5.16247L8.9125 1.66247C9.14031 1.43466 9.14031 1.06532 8.9125 0.837511C8.68469 0.609705 8.31535 0.609705 8.08754 0.837511L5.00002 3.92503Z" fill="#646464"/>
            </svg>
          </div>

        
          <div className="flex items-center gap-3">
            <img src={dp} alt="User" className="w-10 h-10 rounded-full hidden md:block"/>
            <div className="hidden md:block">
              <p className="font-bold">Moni Roy</p>
              <p className="text-sm font-semibold text-[#565656]">Admin</p>
            </div>
            <img src={more} alt="More Options" className="w-5 h-5 hidden md:block"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
