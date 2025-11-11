import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import MyLinks from "../mylinks/MyLinks";
import {
  HandHelping,
  HeartHandshake,
  LogIn,
  LogOut,
  PackageSearch,
  SquarePlus,
} from "lucide-react";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { user, setUser, signOutUser } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        navigate("/");
        toast.success("Successfully signed Out");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <nav>
      <div className="navbar min-h-0 relative z-100 pl-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden pl-0"
            >
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
                <MyLinks
                  to={"/"}
                  className="hover:text-warning transition-all duration-300"
                >
                  Home
                </MyLinks>
              </li>
              <li>
                <MyLinks
                  to={"/about-us"}
                  className="hover:text-warning transition-all duration-300"
                >
                  About
                </MyLinks>
              </li>
              <li>
                <MyLinks
                  to={"/available-foods"}
                  className="hover:text-warning transition-all duration-300"
                >
                  Available Foods
                </MyLinks>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="flex items-center gap-1 md:text-2xl text-xl font-bold"
          >
            <HeartHandshake size={24} className="text-warning" />
            <span className="text-accent font-extrabold leading-tight">
              Share
              <span className="text-amber-500 top-1 relative">Bite</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="flex items-center gap-6 text-accent">
            <li>
              <MyLinks
                to={"/"}
                className="hover:text-warning transition-all duration-300"
              >
                Home
              </MyLinks>
            </li>
            <li>
              <MyLinks
                to={"/about-us"}
                className="hover:text-warning transition-all duration-300"
              >
                About
              </MyLinks>
            </li>
            <li>
              <MyLinks
                to={"/available-foods"}
                className="hover:text-warning transition-all duration-300"
              >
                Available Foods
              </MyLinks>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow space-y-1"
              >
                <div className="pb-3 border-b border-b-amber-600 text-center space-y-1">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li>
                  <MyLinks
                    to={"/add-foods"}
                    className="hover:text-warning transition-all duration-300 flex items-center justify-center"
                  >
                    <SquarePlus size={18} />
                    <span>Add Foods</span>
                  </MyLinks>
                </li>
                <li>
                  <MyLinks
                    to={"/manage-my-foods"}
                    className="hover:text-warning transition-all duration-300 flex items-center justify-center"
                  >
                    <PackageSearch size={18} /> <span>Manage My Foods</span>
                  </MyLinks>
                </li>
                <li>
                  <MyLinks
                    to={"/my-food-request"}
                    className="hover:text-warning transition-all duration-300 flex items-center justify-center"
                  >
                    <HandHelping size={18} />
                    <span> My Food Requests</span>
                  </MyLinks>
                </li>

                <li>
                  <button
                    className="btn h-8 text-left bg-warning text-white flex items-center justify-center"
                    onClick={handleSignOut}
                  >
                    <LogOut size={18} /> <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <MyButton
              to={"/login"}
              className={
                "md:py-2 py-1 px-4 bg-amber-500 hover:bg-amber-500 border-amber-500 "
              }
            >
              {" "}
              <span className="flex items-center gap-1">
                <LogIn size={18} />
                <span>Login</span>
              </span>
            </MyButton>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
