import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const[isAdmin]= useAdmin()
  const [cart] = useCart()
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const nabOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {
        user&&isAdmin && <li>
        <Link to="/dashboard/adminHome">Dashboard</Link>
      </li>
      }
      {
        user&&!isAdmin && <li>
        <Link to="/dashboard/userHome">Dashboard</Link>
      </li>
      }
      <li>
        <Link to='/dashboard/cart'>
          <button className="btn">
           <FaCartShopping></FaCartShopping>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <span>{user?.displayName}</span>
          <li>
            {" "}
            <button onClick={handleLogOut}>LogOut</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {nabOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            bistro boss<br></br> restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nabOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
