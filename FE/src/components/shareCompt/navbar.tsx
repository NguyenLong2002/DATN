import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    // <nav className="bg-white dark:bg-gray-900 fixed w-full z-40 top-0 start-0 border-b border-gray-200 shadow-lg">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //       <img src={logo} className="w-36" alt="ViVuHaNoi" />
    //     </a>
    //     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //       <button
    //         type="button"
    //         className="text-gray-900 font-bold rounded-3xl text-sm px-3 py-1 text-center mr-4"
    //         onClick={() => navigate('/login')}
    //       >
    //         Đăng nhập
    //       </button>
    //       <button
    //         type="button"
    //         className="text-gray-900 bg-primary hover:bg-secondary hover:text-white font-semibold rounded-3xl text-sm px-4 py-2 text-center"
    //         onClick={() => navigate('/login/sign-up')}
    //       >
    //         Đăng ký
    //       </button>

    //       {/* Avatar Button */}
    //       <div className="relative flex items-center">
    //         <h2 className="me-2"><span className="text-primary">Chào!</span> Nguyễn Thành Long</h2>
    //         <img
    //           id="avatarButton"
    //           onClick={toggleDropdown}
    //           className="w-10 h-10 rounded-full cursor-pointer"
    //           src={avatar}
    //           alt="User dropdown"
    //         />

    //         {/* Dropdown */}
    //         {isDropdownOpen && (
    //           <div className="z-10 right-0 top-[50px] absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    //             <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
    //               <div>Bonnie Green</div>
    //               <div className="font-medium truncate">name@flowbite.com</div>
    //             </div>
    //             <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
    //               <li>
    //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //                   Dashboard
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //                   Settings
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
    //                   Earnings
    //                 </a>
    //               </li>
    //             </ul>
    //             <div className="py-1">
    //               <a
    //                 href="#"
    //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //               >
    //                 Sign out
    //               </a>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-40 top-0 start-0 border-b border-gray-200 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-36" alt="ViVuHaNoi" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex">
            <button
              type="button"
              className="text-gray-900 font-bold rounded-3xl text-sm px-3 py-1 text-center mr-4"
              onClick={() => navigate('/login')} 
            >
              Đăng nhập
            </button>
           
            <button
              type="button"
              className="text-gray-900 bg-primary hover:bg-secondary hover:text-white font-semibold rounded-3xl text-sm px-4 py-2 text-center"
              onClick={() => navigate('/login/sign-up')} 
            >
              Đăng ký
            </button>


{/* Avatar Button */}
           <div className="relative flex items-center">
             <h2 className="me-2"><span className="text-primary">Chào!</span> Nguyễn Thành Long</h2>
             <img
               id="avatarButton"
               onClick={toggleDropdown}
               className="w-10 h-10 rounded-full cursor-pointer"
               src={avatar}
               alt="User dropdown"
             />

             {/* Dropdown */}
             {isDropdownOpen && (
               <div className="z-10 right-0 top-[50px] absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                 <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                   <div>Bonnie Green</div>
                   <div className="font-medium truncate">name@flowbite.com</div>
                 </div>
                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                   <li>
                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                       Dashboard
                     </a>
                   </li>
                   <li>
                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                       Settings
                     </a>
                   </li>
                   <li>
                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                       Earnings
                     </a>
                   </li>
                 </ul>
                 <div className="py-1">
                   <a
                     href="#"
                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                   >
                     Sign out
                   </a>
                 </div>
               </div>
             )}
           </div>

          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
             <NavLink
              to="/"
              className="
                block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                "
            >
              Trang chủ
            </NavLink>
            <NavLink
              to="/tours"
              className="
                block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                 "
            >
              Du lịch
            </NavLink>
            
             <NavLink
              to="/contact"
              className="
                block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0
                  "
            >
             Liên hệ
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
