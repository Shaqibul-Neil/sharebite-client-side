import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFoods from "../pages/AvailableFoods";
import AddFoods from "../pages/AddFoods";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import FoodDetails from "../pages/FoodDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <p>Loading</p>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/food-quantity"),
        element: <Home />,
      },
      {
        path: "/available-foods",
        loader: () => fetch("http://localhost:5000/foods"),
        element: <AvailableFoods />,
      },
      {
        path: "/add-foods",
        element: (
          <PrivateRoutes>
            <AddFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/food-details/:id",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivateRoutes>
            <MyFoodRequest />
          </PrivateRoutes>
        ),
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
