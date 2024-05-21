import { Link } from "react-router-dom";


const NavBar = () => {

    const nabOptions = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    <li><Link to='/order/salad'>Order Food</Link></li>
        
        
    
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max max-w-7xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
        {nabOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">bistro boss<br></br> restaurant</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {nabOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;