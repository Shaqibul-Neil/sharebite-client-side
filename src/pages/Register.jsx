import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import Container from "../components/container/Container";
import { useState } from "react";
import passwordError from "../utilities/passwordError";
import SecondaryButton from "../components/button/SecondaryButton";

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

    //error reset
    setSignUpError({ email: "", password: "" });

    //password validation
    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const passwordCheck = passwordError(regEx, password);
    if (passwordCheck) {
      setSignUpError({ password: passwordCheck });
      return;
    }
    //user creation
    createUser(email, password)
      .then(() => {
        //update profile
        updateUser(displayName, photoURL).then(() => {
          setUserLoading(false);
          //signout user
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
    <div>
      <title>ShareBite - Register</title>
      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 py-12">
          {/* Left side: welcoming text */}
          <div className="max-w-lg text-center space-y-8 lg:text-left drop-shadow-lg">
            <h1 className="md:text-5xl text-3xl font-extrabold text-accent">
              Join ShareBite Today
            </h1>
            <p className="md:text-lg text-primary">
              Be part of a community that shares food, spreads love, and reduces
              waste. Give your surplus meals a new purpose — because every bite
              counts. Start your journey with ShareBite and make a real impact,
              one plate at a time.
            </p>
          </div>

          {/* Right side: Signup card */}
          <div className="w-full max-w-md backdrop-blur-2xl space-y-8 bg-white/15 border border-white/25 shadow-2xl rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-center text-accent">
              Create Account
            </h2>

            <form className="space-y-5" onSubmit={handleSignUp}>
              {/* Name */}
              <div className="relative mb-7">
                <label className="block text-primary mb-1 ">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="w-full bg-white/20 placeholder-gray-300 border border-primary focus:outline-none focus:border-amber-400 transition-all duration-200 p-2 text-primary rounded-lg"
                />
              </div>

              {/* Photo URL */}
              <div className="relative mb-7">
                <label className="block text-primary mb-1 ">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Paste your photo link"
                  className="w-full bg-white/20 placeholder-gray-300 border border-primary focus:outline-none focus:border-amber-400 transition-all duration-200 p-2 text-primary rounded-lg"
                />
              </div>

              {/* Email */}
              <div className="relative mb-7">
                <label className="block text-primary mb-1 ">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  className="w-full bg-white/20 placeholder-gray-300 border border-primary focus:outline-none focus:border-amber-400 transition-all duration-200 p-2 text-primary rounded-lg"
                  onChange={() => setSignUpError({ ...signUpError, email: "" })}
                />
                {signUpError.email && (
                  <p className="absolute -bottom-5 left-0 text-xs text-red-400">
                    {signUpError.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative mb-7">
                <label className="block text-primary mb-1 ">Password *</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Password"
                  className="w-full bg-white/20 placeholder-gray-300 border border-primary focus:outline-none focus:border-amber-400 transition-all duration-200 p-2 text-primary rounded-lg"
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
              className="flex items-center justify-center gap-3 bg-white text-primary px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-all cursor-pointer text-sm border"
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
      </Container>
    </div>
  );
};

export default Register;
