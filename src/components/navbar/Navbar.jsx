import { FaUser } from "react-icons/fa";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

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
      <div className="navbar py-0 min-h-0 relative z-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/available-foods"}>Available Foods</Link>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
            ShareBite
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/available-foods"}>Available Foods</Link>
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
                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li className="mt-3">
                  <Link to={"/add-foods"}>Add Foods</Link>
                </li>
                <li>
                  <Link to={"/manage-my-foods"}>
                    <FaUser /> Manage My Foods
                  </Link>
                </li>
                <li>
                  <Link to={"/my-food-request"}>My Food Requests</Link>
                </li>

                <li>
                  <button
                    className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                    onClick={handleSignOut}
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn border-gray-300">
              <IoLogIn /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
