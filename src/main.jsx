import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";
import { PropagateLoader } from "react-spinners";
import { motion } from "framer-motion";

const Main = () => {
  const [spinnerOnLoad, setSpinnerOnLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinnerOnLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider>
      {spinnerOnLoad && (
        <motion.div
          className="flex justify-center items-center h-screen bg-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <PropagateLoader height="120" width="120" color="#f57c00" />
        </motion.div>
      )}
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "linear-gradient(90deg, #006400, #008000)",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            },
          },
          error: {
            style: {
              background: "linear-gradient(90deg, #cc0000, #ff004c)",
              color: "#fff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
            },
          },
        }}
      />
    </AuthProvider>
  );
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
