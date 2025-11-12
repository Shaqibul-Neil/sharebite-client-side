import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import Container from "../components/container/Container";
import RequestFoodModal from "../components/modal/RequestFoodModal";
import FoodDetailsCard from "../components/foodCard/FoodDetailsCard";
import RequestedFoodsTable from "../components/foodCard/RequestedFoodsTable";
import useAxiosSecure from "../hooks/useAxiosSecure";
import FoodDetailsCardSkeleton from "../components/others/FoodDetailsCardSkeleton";

const FoodDetails = () => {
  const { id } = useParams();
  const { user, refresh, setRefresh } = useAuth();
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const [requestedFoods, setRequestedFoods] = useState([]);
  const requestModalRef = useRef();
  const axiosSecureInstance = useAxiosSecure();

  useEffect(() => {
    axiosSecureInstance.get(`/food/${id}`).then((data) => {
      setTimeout(() => {
        setFood(data.data.result);
        setLoading(false);
      }, 1500);
    });
  }, [axiosSecureInstance, id, refresh]);

  useEffect(() => {
    axiosSecureInstance.get(`/requests/food/${id}`).then((data) => {
      setRequestedFoods(data.data);
    });
  }, [axiosSecureInstance, id, refresh]);

  const conditionalClass = (status) => {
    if (status === "Available" || status === "Accepted") return "badge-success";
    if (status === "Pending") return "badge-warning";
    if (status === "Rejected") return "badge-error";
    if (status === "Donated") return "badge-info";
  };

  const foodInfo = {
    food,
    requestedFoods,
    setRequestedFoods,
    requestModalRef,
    user,
    setRefresh,
    refresh,
    conditionalClass,
  };
  return (
    <div className="bg-[#fefefe] space-y-16 py-16">
      <title>ShareBite - Food Details</title>
      <Container>
        {/* main content */}
        {loading ? (
          <FoodDetailsCardSkeleton />
        ) : (
          <FoodDetailsCard foodInfo={foodInfo} />
        )}
        {/* request modal */}
        <RequestFoodModal foodInfo={foodInfo} />
      </Container>
      {user?.email === food.donator?.email && (
        <RequestedFoodsTable foodInfo={foodInfo} />
      )}
    </div>
  );
};

export default FoodDetails;
