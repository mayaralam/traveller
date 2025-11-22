import { Link, useNavigate } from "react-router-dom";
export default function nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Destinations</Link>
              </li>
              <li>
                <Link to="../traveller">Services</Link>
              </li>
              <li>
                <Link to="../about">About Us</Link>
              </li>
              <li>
                <Link to="../contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className=" flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8L4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1l3 2l2 3l1-1v-3l3-2l3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2"/></svg>
            <a className="btn btn-ghost text-lg text-transparent bg-clip-text bg-gradient-to-br from-[#FF7A00] to-[#FF4D88]">Wanderlust</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Destinations</Link>
            </li>
            <li>
              <Link to="../traveller">Services</Link>
            </li>
            <li>
              <Link to="../about">About Us</Link>
            </li>
            <li>
              <Link to="../contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 items-center">
          <a
            onClick={() => navigate("/login")}
            className="btn py-2 px-4 cursor-pointer text-black bg-white rounded-lg"
          >
            Sign In
          </a>
          <a
            onClick={() => navigate("/traveller")}
            className="btn py-2 px-4 cursor-pointer  text-white bg-black rounded-lg"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
