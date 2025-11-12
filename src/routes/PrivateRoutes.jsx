import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import { RotatingSquare } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PrivateRoutes = ({ children }) => {
  const { user, userLoading } = useAuth();
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (userLoading || showLoader)
    return (
      <motion.div
        className="flex justify-center items-center h-screen bg-[#fffaf5] -mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <RotatingSquare
          visible={true}
          height="120"
          width="120"
          color="#f57c00"
        />
      </motion.div>
    );
  if (!user)
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  return children;
};

export default PrivateRoutes;
