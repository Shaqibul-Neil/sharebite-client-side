import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();

  if (userLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading....
      </div>
    );
  if (!user)
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  return children;
};

export default PrivateRoutes;
