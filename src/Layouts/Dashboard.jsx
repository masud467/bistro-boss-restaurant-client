import {  FaHome, FaShoppingCart, FaCalendarAlt,FaShoppingBag, FaList, FaBook, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdPayment, MdReviews, MdMenu,MdEmail,MdRestaurant } from "react-icons/md";

import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const[cart] = useCart()
    const [isAdmin] = useAdmin()
  return (
    <div className="flex">
      <div className="w-72 min-h-screen bg-[#D1A054]">
        <ul className="menu">
           {
            isAdmin?<>
             <li>
                <NavLink to='/dashboard/adminHome'>
                <FaHome></FaHome>
                    Admin Home</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/addItems'>
                <MdRestaurant></MdRestaurant>
                    Add Items </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/manageItems'>
                <FaList></FaList>
                    Manage Items </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/manageBooking'>
                <FaBook></FaBook>
                    Manage Bookings</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/users'>
                <FaUsers></FaUsers>
                   All Users</NavLink>
            </li>
           
            </>
            
            :
            <>
             <li>
                <NavLink to='/dashboard/userHome'>
                <FaHome></FaHome>
                    User Home</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/payment'>
                <MdPayment></MdPayment>
                    Payment History </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/reservation'>
                <FaCalendarAlt></FaCalendarAlt>
                    Reservation </NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/cart'>
                <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/review'>
                <MdReviews></MdReviews>
                    Add Review</NavLink>
            </li>
            <li>
                <NavLink to='/dashboard/payment-history'>
                <FaShoppingCart></FaShoppingCart>
                    Real Payment History</NavLink>
            </li>
            </>
           }
            <div className="divider"></div>
            <li>
                <NavLink to='/'>
                <FaHome></FaHome>
                    Home</NavLink>
            </li>
            <li>
                <NavLink to='/menu'>
                <MdMenu></MdMenu>
                    Menu</NavLink>
            </li>
            <li>
                <NavLink to='/order/salad'>
                <FaShoppingBag></FaShoppingBag>
                    Shop</NavLink>
            </li>
            <li>
                <NavLink to='/order/contact'>
                <MdEmail></MdEmail>
                    Contact</NavLink>
            </li>
        </ul>
      </div>
      <div className="flex-1 p-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
