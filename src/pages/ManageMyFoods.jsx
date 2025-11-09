import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import Container from "../components/container/Container";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(`http://localhost:5000/my-foods?email=${user.email}`)
      .then((data) => {
        setMyFoods(data.data);
        setLoading(false);
      });
  }, [axiosInstance, user]);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ---------- LEFT SIDE ---------- */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent">
              My Food Donations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Here you can see all the foods you've donated. You can update or
              remove any item you shared. Keeping track of your contributions
              helps you manage them efficiently and ensures food reaches those
              in need.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Make sure to keep your food details up to date. Expired or already
              claimed items should be removed to avoid confusion.
            </p>
          </div>

          {/* ---------- RIGHT SIDE / TABLE ---------- */}
          <div className="lg:col-span-2 overflow-x-auto bg-white p-6 rounded-lg shadow-md">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Food Name</th>
                  <th>Food Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {myFoods.map((food, index) => (
                  <tr key={food._id}>
                    <td>{index + 1}</td>
                    <td className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask rounded-lg h-12 w-12">
                          <img src={food?.food_image} alt={food?.food_name} />
                        </div>
                      </div>
                      <div className="font-bold">{food?.food_name}</div>
                    </td>
                    <td>
                      {food?.food_quantity < 10
                        ? `0${food.food_quantity}`
                        : food.food_quantity}{" "}
                      Servings
                    </td>
                    <td>
                      {food?.food_status === "Available" ? (
                        <span className="badge badge-success text-xs font-semibold badge-outline">
                          {food.food_status}
                        </span>
                      ) : (
                        <span className="badge badge-[#3B82F6] text-xs font-semibold badge-outline">
                          {food.food_status}
                        </span>
                      )}
                    </td>
                    <td>
                      <button className="btn btn-outline btn-warning btn-xs mr-2">
                        Update
                      </button>
                      <button className="btn btn-outline btn-error btn-xs">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {myFoods.length === 0 && (
              <p className="text-center py-6 text-gray-500">
                No foods donated yet.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageMyFoods;
