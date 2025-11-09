import { useEffect, useRef, useState } from "react";
import useAxios from "../hooks/useAxios";
import { Link, useParams } from "react-router";
import useAuth from "../hooks/useAuth";
import Container from "../components/container/Container";
import RequestFoodModal from "../components/modal/RequestFoodModal";
import FoodDetailsCard from "../components/foodCard/FoodDetailsCard";

const FoodDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const [requestedFoods, setRequestedFoods] = useState([]);
  const requestModalRef = useRef();
  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance
      .get(`http://localhost:5000/food-details/${id}`)
      .then((data) => {
        setFood(data.data.result);
        setLoading(false);
        console.log(data.data.result);
      });
  }, [axiosInstance, id]);
  if (loading) return <p>Loading......</p>;

  const foodInfo = {
    food,
    requestedFoods,
    setRequestedFoods,
    requestModalRef,
    user,
  };
  return (
    <div className="bg-[#fefefe]">
      <Container className="py-20">
        {/* main content */}
        <FoodDetailsCard foodInfo={foodInfo} />
        {/* request modal */}
        <RequestFoodModal foodInfo={foodInfo} />
      </Container>
    </div>
  );
};

export default FoodDetails;
