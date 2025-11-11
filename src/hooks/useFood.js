import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useFood = () => {
  const axiosInstance = useAxios();
  const [allFoodData, setAllFoodData] = useState([]);
  const [foodLoading, setFoodLoading] = useState(true);
  const [foodError, setFoodError] = useState(null);
  useEffect(() => {
    axiosInstance
      .get("http://localhost:5000/foods")
      .then((data) => {
        setAllFoodData(data.data);
        setFoodLoading(false);
      })
      .catch((err) => setFoodError(err))
      .finally(() => setFoodLoading(false));
  }, [axiosInstance]);
  return { allFoodData, foodLoading, foodError };
};

export default useFood;
