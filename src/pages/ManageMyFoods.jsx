import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Container from "../components/container/Container";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SecondaryButton from "../components/button/SecondaryButton";
import TableSkeleton from "../components/others/TableSkeleton";
import InfoBanner from "../components/banner/InfoBanner";

const ManageMyFoods = () => {
  const { user, refresh, setRefresh } = useAuth();
  const axiosSecureInstance = useAxiosSecure();
  const [myFoods, setMyFoods] = useState([]);
  const [manageLoading, setManageLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecureInstance.get(`/my-foods?email=${user?.email}`).then((data) => {
      setTimeout(() => {
        setMyFoods(data.data);
        setManageLoading(false);
      }, 1500);
    });
  }, [axiosSecureInstance, user?.email, refresh]);

  const handleFoodDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ml-2",
        cancelButton: "btn btn-error",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecureInstance.delete(`/my-foods/${id}`).then((data) => {
            if (data.data.result.deletedCount) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
              });
              setRefresh(!refresh);
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your food information is safe",
            icon: "error",
          });
        }
      });
  };

  const myFoodQuantity = myFoods.reduce(
    (accu, curr) => accu + parseInt(curr.food_quantity),
    0
  );

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-20">
      <title>ShareBite - Manage My Food</title>
      <Container>
        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          {/* LEFT SIDE */}
          <div className="space-y-6 col-span-1">
            <h2 className="text-3xl font-bold text-accent">
              My Food Donations
            </h2>
            <p className="text-primary leading-relaxed">
              Here you can see all the foods you've donated. You can update or
              remove any item you shared.
            </p>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>
                <strong>Total Foods Donated:</strong>{" "}
                {myFoods.length < 10
                  ? `0${myFoods.length || 0}`
                  : myFoods.length || 0}
              </p>
              <p>
                <strong>Total Servings:</strong>{" "}
                {myFoodQuantity < 10 ? `0${myFoodQuantity}` : myFoodQuantity}
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-2 italic">
              Tip: Keep your food images clear and updated. Updating your
              donation regularly increases visibility to hungry people in need.
            </p>
            <SecondaryButton
              className="mt-3 border-warning bg-warning hover:bg-warning text-warning w-48 py-2"
              onClick={() => navigate("/add-foods")}
              hoverTextColor="group-hover:text-warning"
            >
              Donate More Food
            </SecondaryButton>{" "}
          </div>

          {/* Right Side */}
          {/* table for md and lg screen */}

          <div className="lg:col-span-2 hidden md:block">
            {/* RIGHT SIDE */}
            {manageLoading ? (
              <TableSkeleton count={4} />
            ) : (
              <div className="lg:col-span-2 overflow-x-auto bg-white p-6 rounded-3xl shadow-md">
                {myFoods.length === 0 ? (
                  <p className="text-center py-6 text-gray-500">
                    No foods donated yet.
                  </p>
                ) : (
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
                                <img
                                  src={food.food_image}
                                  alt={food.food_name}
                                />
                              </div>
                            </div>
                            <div className="font-bold">{food.food_name}</div>
                          </td>
                          <td>
                            {food.food_quantity < 10
                              ? `0${food.food_quantity}`
                              : food.food_quantity}{" "}
                            Servings
                          </td>
                          <td>
                            {food.food_status === "Available" ? (
                              <span className="badge badge-success text-xs font-semibold badge-outline">
                                {food.food_status}
                              </span>
                            ) : (
                              <span className="badge badge-info text-xs font-semibold badge-outline">
                                {food.food_status}
                              </span>
                            )}
                          </td>
                          <td>
                            <SecondaryButton
                              className="border-warning bg-warning hover:bg-warning mr-2 md:mb-2 lg:mb-0 w-24"
                              hoverTextColor="group-hover:text-warning"
                              onClick={() =>
                                navigate(`/update-food/${food._id}`, {
                                  state: { food },
                                })
                              }
                            >
                              Update
                            </SecondaryButton>

                            <SecondaryButton
                              className="border-error bg-error hover:bg-error w-24"
                              hoverTextColor="group-hover:text-error"
                              onClick={() => handleFoodDelete(food._id)}
                            >
                              Delete
                            </SecondaryButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>

          {/* table for sm screen */}

          <div className="md:hidden overflow-x-auto h-96 w-full p-4 bg-white rounded-3xl shadow-md">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Food Name</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myFoods.map((food, index) => (
                  <tr key={food._id}>
                    <th>{index + 1}</th>
                    <td className="flex items-center gap-2">
                      <div className="avatar">
                        <div className="mask rounded-lg h-12 w-12">
                          <img src={food.food_image} alt={food.food_name} />
                        </div>
                      </div>
                      <div>{food.food_name}</div>
                    </td>
                    <td>
                      {food.food_quantity < 10
                        ? `0${food.food_quantity}`
                        : food.food_quantity}{" "}
                      Servings
                    </td>
                    <td>
                      {food.food_status === "Available" ? (
                        <span className="badge badge-success text-xs font-semibold badge-outline">
                          {food.food_status}
                        </span>
                      ) : (
                        <span className="badge badge-info text-xs font-semibold badge-outline">
                          {food.food_status}
                        </span>
                      )}
                    </td>
                    <td>
                      <SecondaryButton
                        className="border-warning bg-warning hover:bg-warning w-24 mb-2"
                        hoverTextColor="group-hover:text-warning"
                        onClick={() =>
                          navigate(`/update-food/${food._id}`, {
                            state: { food },
                          })
                        }
                      >
                        Update
                      </SecondaryButton>
                      <SecondaryButton
                        className="border-error bg-error hover:bg-error w-24"
                        hoverTextColor="group-hover:text-error"
                        onClick={() => handleFoodDelete(food._id)}
                      >
                        Delete
                      </SecondaryButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <InfoBanner text={"Having issues managing your food"} />
      </Container>
    </div>
  );
};

export default ManageMyFoods;
