import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Container from "../components/container/Container";
import { useState } from "react";
import passwordError from "../utilities/passwordError";
import SecondaryButton from "../components/button/SecondaryButton";
import registerpage from "../assets/registrationpage.jpg"; // optional background image

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUpError, setSignUpError] = useState({ email: "", password: "" });
  const {
    createUser,
    setUser,
    setUserLoading,
    googleSignIn,
    signOutUser,
    updateUser,
  } = useAuth();
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    googleSignIn()
      .then(() => {
        setUserLoading(false);
        toast.success("Successfully logged with Google");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const displayName = e.target.name.value || "";
    const photoURL = e.target.photo.value || "";

    setSignUpError({ email: "", password: "" });

    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const passwordCheck = passwordError(regEx, password);
    if (passwordCheck) {
      setSignUpError({ password: passwordCheck });
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUser(displayName, photoURL).then(() => {
          setUserLoading(false);
          signOutUser().then(() => {
            setUser(null);
            toast.success(
              "Successfully created account. Now Login to make some donation"
            );
            e.target.reset();
            navigate("/login");
          });
        });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error("Email's already been used");
          return;
        }
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white/90 lg:px-6 md:py-16 px-2 py-6">
      <title>ShareBite - Register</title>
      <div className="flex w-full max-w-6xl rounded-lg overflow-hidden shadow-2xl lg:h-[90vh] md:flex-row flex-col lg:gap-6 py-8 lg:pb-12">
        {/* Left side: background image */}
        <div className="lg:w-7/12 md:w-1/2 relative h-[60vh] md:h-full lg:rounded-l-lg rounded-t-lg overflow-hidden">
          <img
            src={registerpage}
            alt="Register Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/65 flex px-10 lg:px-16 flex-col justify-center lg:gap-6 md:gap-6">
            <h1 className="text-warning md:text-5xl text-3xl font-extrabold text-center md:text-left leading-tight">
              Join <span className="text-white/90">Share</span>
              Bite Today
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 md:gap-1 flex-col md:flex-row items-center">
                {/* User images stack */}
                <div className="flex -space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="user1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    alt="user2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="user3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-white text-md font-medium text-center md:text-left">
                  <span className="text-amber-600 text-lg font-bold">10k+</span>{" "}
                  users already joined
                </p>
              </div>

              {/* Optional extra stats */}
              <div className="flex items-center gap-4 text-white text-sm text-center md:text-left">
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-amber-600">
                    125000+
                  </span>
                  <span>Meals Donated</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-amber-600">56+</span>
                  <span>Communities Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: signup form */}
        <div className="lg:w-5/12 md:w-1/2 flex items-center justify-center bg-white/15 backdrop-blur-md lg:p-10 p-3 mt-12 md:mt-0">
          <div className="w-full space-y-8">
            <h2 className="text-2xl font-semibold text-center text-accent">
              Create Account
            </h2>

            <form className="space-y-5" onSubmit={handleSignUp}>
              {/* Name & Photo side by side */}
              <div className="flex lg:flex-row flex-col gap-4">
                <div className="flex-1 relative">
                  <label className="block text-primary mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                  />
                </div>
                <div className="flex-1 relative">
                  <label className="block text-primary mb-1">Photo URL</label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Paste your photo link"
                    className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-primary mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                  onChange={() => setSignUpError({ ...signUpError, email: "" })}
                />
                {signUpError.email && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {signUpError.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-primary mb-1">Password *</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none focus:ring-1"
                  onChange={() =>
                    setSignUpError({ ...signUpError, password: "" })
                  }
                />
                {signUpError.password && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {signUpError.password}
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

              {/* Register button */}
              <SecondaryButton
                className="w-full py-2 bg-warning text-warning border-warning hover:bg-warning"
                type="submit"
                hoverTextColor="group-hover:text-warning"
                width="64"
              >
                Register
              </SecondaryButton>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-3">
              <div className="h-px w-16 bg-gray-400"></div>
              <span className="text-sm text-primary">or</span>
              <div className="h-px w-16 bg-gray-400"></div>
            </div>

            {/* Google signup */}
            <button
              type="button"
              onClick={handleSignInWithGoogle}
              className="flex items-center justify-center gap-3 bg-white text-primary px-5 py-2 rounded-3xl w-full font-semibold hover:bg-gray-200 transition-all cursor-pointer text-sm border"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            {/* Already have account link */}
            <p className="text-center text-sm text-gray-700 mt-3">
              Already have an account?{" "}
              <Link to="/login" className="underline text-md text-warning">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
