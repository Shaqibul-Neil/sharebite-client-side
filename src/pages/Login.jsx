import { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Container from "../components/container/Container";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SecondaryButton from "../components/button/SecondaryButton";

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
    //error reset
    setLoginError({ email: "", password: "" });
    //validation
    if (!email) {
      return setLoginError({
        email: "Please Enter your e-mail to proceed",
      });
    }
    if (password.length < 6)
      return setLoginError({
        password: "Password is Weak",
      });
    //log in user
    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Successfully Logged In");
        navigate(location?.state || "/");
      })
      .catch((err) => {
        if (err.code === "auth/invalid-credential") {
          setLoginError({
            password: "Access denied! Wrong credentials",
          });
          return;
        }
        toast.error(err.message);
      });
  };
  return (
    <div>
      {" "}
      <title>ShareBite - Login</title>
      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12">
          {/* Left side: welcoming text */}
          <div className="max-w-lg text-center space-y-8 lg:text-left drop-shadow-lg">
            <h1 className="md:text-5xl text-3xl font-extrabold text-accent">
              Welcome Back
            </h1>
            <p className="md:text-lg text-primary">
              Join the movement of sharing kindness through food with ShareBite.
              Give your extra meals a new purpose and brighten someone's day.
              Connect with your community, reduce waste, and spread love — one
              plate at a time. The table is set, and your next act of kindness
              begins right here.
            </p>
          </div>

          {/* Right side: Login card */}
          <div className="w-full max-w-md backdrop-blur-2xl space-y-8 bg-white/15 border border-white/25 shadow-2xl rounded-2xl p-8">
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
                  className="w-full bg-white/20 placeholder-gray-300 border border-primary focus:outline-none focus:border-amber-400 transition-all duration-200 p-2 text-primary rounded-lg"
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
                  className="w-full bg-white/20 placeholder-gray-300 border border-primary focus:outline-none focus:border-amber-400 transition-all duration-200 p-2 text-primary rounded-lg"
                />
                {loginError.password && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {loginError.password}
                  </p>
                )}
                <span
                  className="absolute top-10 right-5 cursor-pointer z-30"
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
      </Container>
    </div>
  );
};

export default Login;
