import { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Container from "../components/container/Container";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SecondaryButton from "../components/button/SecondaryButton";
import loginpage from "../assets/loginpage.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState({ email: "", password: "" });
  const { setUser, setUserLoading, signInUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then(() => {
        setUserLoading(false);
        toast.success("Successfully logged with Google");
        navigate(location?.state || "/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    setLoginError({ email: "", password: "" });

    if (!email) {
      return setLoginError({ email: "Please Enter your e-mail to proceed" });
    }
    if (password.length < 6)
      return setLoginError({ password: "Password is Weak" });

    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully Logged In");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
          setLoginError({ password: "Access denied! Wrong credentials" });
          return;
        }
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/90 lg:p-6 p-2 py-16">
      <div className="flex md:flex-row flex-col w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl lg:h-[90vh] ">
        {/* Left side: background image */}
        <div className="lg:w-7/12 md:w-1/2 relative h-[60vh] md:h-full lg:rounded-l-lg rounded-t-lg overflow-hidden">
          <img
            src={loginpage}
            alt="Login Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/25 flex items-center justify-start px-10 lg:px-16">
            <h1 className="text-white md:text-5xl text-3xl font-extrabold text-center md:text-left">
              Welcome Back
            </h1>
          </div>
        </div>

        {/* Right side: login form */}
        <div className="lg:w-5/12 md:w-1/2 flex items-center justify-center bg-white/15 backdrop-blur-md lg:p-10 p-3 mt-12 lg:mt-0">
          <div className="w-full space-y-8">
            <h2 className="text-2xl font-semibold text-center text-accent">
              Login
            </h2>
            <form className="space-y-5" onSubmit={handleLogin}>
              {/* Email */}
              <div className="relative mb-7">
                <label className="block text-primary mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  onClick={() => setLoginError({ ...loginError, email: "" })}
                  placeholder="example@email.com"
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                />
                {loginError.email && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {loginError.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative mb-7">
                <label className="block text-primary mb-1">Password *</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onClick={() => setLoginError({ ...loginError, password: "" })}
                  required
                  placeholder="Password"
                  className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                />
                {loginError.password && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {loginError.password}
                  </p>
                )}
                <span
                  className="absolute top-10 right-3 cursor-pointer z-30"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye size={16} color="#f57c00" />
                  ) : (
                    <EyeOff size={18} color="#f57c00" />
                  )}
                </span>
              </div>

              {/* Login button */}
              <div className="flex justify-center">
                <SecondaryButton
                  className="w-full py-2 bg-warning text-warning border-warning hover:bg-warning"
                  type="submit"
                  hoverTextColor="group-hover:text-warning"
                >
                  Login
                </SecondaryButton>
              </div>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-3">
              <div className="h-px w-16 bg-gray-400"></div>
              <span className="text-sm text-primary">or</span>
              <div className="h-px w-16 bg-gray-400"></div>
            </div>

            {/* Google login */}
            <button
              type="button"
              onClick={handleSignInWithGoogle}
              className="flex items-center justify-center gap-3 bg-white text-primary px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-all cursor-pointer text-sm border"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-700 mt-3 ">
              Don't have an account?{" "}
              <Link to="/register" className="underline text-md text-warning">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
