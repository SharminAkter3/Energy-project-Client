import { NavLink, Outlet } from 'react-router-dom';
// import { FaAd, FaBars, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";

import { FaBlog, FaDashcube, FaFileInvoiceDollar, FaProcedures, FaServicestack, FaSignOutAlt, FaUpload, FaUser } from 'react-icons/fa';
import DashboardNavbar from '../Pages/Dashboard/DashboardNavbar/DashboardNavbar';


const Dashboard = () => {
  return (
    <div>
      <div>

        {/*   <Navbar></Navbar> */}
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          {/*   dynamic part with navbar and body */}
          <div className="drawer-content flex flex-col">
            <DashboardNavbar></DashboardNavbar>

            <div className="bg-[##FEFEFE]">
              <Outlet />
            </div>

          </div>

          {/* dashboard side bar start  */}
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-60 min-h-full bg-[#1C2434] text-[#DEE4EE]">
              {/* Sidebar content here */}


              <li className='mt-6 mb-14'>
                <h1 className='text-3xl font-bold text-white'>Logo</h1>
              </li>



              <li className='text-white mb-1'>
                <NavLink to="/dashboard/dashboard" className="flex items-center space-x-2">
                  <FaDashcube />
                  <span>Dashboard</span>
                </NavLink>
              </li>


              <li className='text-white mb-1'>
                <NavLink to="/dashboard/user" className="flex items-center space-x-2">
                  <FaUser />
                  <span>User</span>
                </NavLink>
              </li>
              <li className='text-white mb-1'>
                <NavLink to="/dashboard/products" className="flex items-center space-x-2">
                  <FaProcedures />
                  <span>Products</span>
                </NavLink>
              </li>
              <li className='text-white mb-1'>
                <NavLink to="/dashboard/services" className="flex items-center space-x-2">
                  <FaServicestack />
                  <span>Services</span>
                </NavLink>
              </li>
              <li className='text-white mb-1'>
                <NavLink to="/dashboard/blog" className="flex items-center space-x-2">
                  <FaBlog />
                  <span>Blog</span>
                </NavLink>
              </li>
              <li className='text-white mb-1'>
                <NavLink to="/dashboard/upload" className="flex items-center space-x-2">
                  <FaUpload />
                  <span>Upload</span>
                </NavLink>
              </li>



              <ul className='mt-4'>
                <li>Support</li>

                <li className='text-white mb-1'>
                  <NavLink to="/dashboard/invoice" className="flex items-center space-x-2">
                    <FaFileInvoiceDollar />
                    <span>Invoice</span>
                    <p className='h-5 w-5 bg-blue-600 text-white text-center rounded'>5</p>
                  </NavLink>
                </li>

              </ul>


              <li className="mb-1">
                <details className="dropdown">
                  <summary className="">
                    <FaSignOutAlt />
                    Authentication
                  </summary>
                  <ul className="shadow menu  w-48 ">
                    <li className="mb-1">
                      <NavLink to="/dashboard/teachers" className="inline-flex items-center">
                      Sign In
                      </NavLink>
                    </li>
                    <li className="mb-1"><a>Sign Up</a></li>
                    <li className="mb-1"><a>Reset Password</a></li>
                  </ul>
                </details>
              </li>

            </ul>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
