import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Container from "../components/container/Container";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SecondaryButton from "../components/button/SecondaryButton";
import TableRequestSkeleton from "../components/others/TableRequestSkeleton";
import { useNavigate } from "react-router";

const MyFoodRequest = () => {
  const { user, allFoodData, refresh, setRefresh } = useAuth();
  const axiosSecureInstance = useAxiosSecure();
  const [myRequests, setMyRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecureInstance.get(`/my-requests?email=${user?.email}`).then((res) => {
      setTimeout(() => {
        //console.log(res.data);
        setMyRequests(res.data);
        setLoading(false);
      }, 1500);
    });
  }, [axiosSecureInstance, user, refresh]);

  const totalRequest = myRequests.reduce((table, curr) => {
    if (!table[curr.status]) {
      table[curr.status] = 0;
    }
    table[curr.status] += 1;
    return table;
  }, {});

  const foodTable = allFoodData.reduce((table, curr) => {
    table[curr._id] = curr;
    return table;
  }, {});

  console.log(foodTable);
  const handleReqDelete = (id) => {
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
          axiosSecureInstance.delete(`/my-requests/${id}`).then((data) => {
            if (data.data.result.deletedCount) {
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your request has been deleted.",
                icon: "success",
              });
              setRefresh(!refresh);
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your request is safe",
            icon: "error",
          });
        }
      });
  };

  const handleReRequest = (id) => {
    navigate(`/food/${id}`);
    console.log(id);
    console.log(foodTable[id]);
  };

  return (
    <div className="bg-[#E9E9E9] min-h-screen py-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ---------- LEFT SIDE ---------- */}
          <div className="space-y-6 col-span-1">
            <h2 className="text-3xl font-bold text-accent">My Food Requests</h2>
            <p className="text-gray-600 leading-relaxed">
              Here you can see all the food requests you've made to different
              donors. Keep track of their current status and contact information
              for smooth coordination.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Once your request is approved or declined, it will update here
              automatically. You can also delete a request if you no longer need
              it.
            </p>
            {/* ---------- Stats ---------- */}
            <div className="mt-4 space-y-2 text-gray-700">
              <p>
                <strong>Pending Request : </strong>
                {totalRequest.Pending < 10
                  ? `0${totalRequest.Pending || 0}`
                  : totalRequest.Pending || 0}
              </p>
              <p>
                <strong>Accepted Request : </strong>
                {totalRequest.Accepted < 10
                  ? `0${totalRequest.Accepted || 0}`
                  : totalRequest.Accepted || 0}
              </p>
              <p>
                <strong>Rejected Request : </strong>
                {totalRequest.Rejected < 10
                  ? `0${totalRequest.Rejected || 0}`
                  : totalRequest.Rejected || 0}
              </p>
            </div>
            <SecondaryButton
              className="mt-3 border-warning bg-warning hover:bg-warning text-warning w-48 py-2"
              onClick={() => navigate("/add-foods")}
              hoverTextColor="group-hover:text-warning"
            >
              Request More Food
            </SecondaryButton>{" "}
          </div>

          {/* ---------- RIGHT SIDE / TABLE ---------- */}
          {/* table for md and lg screen */}
          <div className="lg:col-span-2 overflow-x-auto bg-white p-6 rounded-lg shadow-md hidden md:block h-auto">
            {loading ? (
              <TableRequestSkeleton count={3} />
            ) : myRequests.length === 0 ? (
              <p className="text-center py-6 text-gray-500">
                No requests yet. Browse foods and request your first one!
              </p>
            ) : (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Food Name</th>
                    <th>Donor Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {myRequests.map((req, index) => {
                    const food = foodTable[req.foodId];
                    const donor = food?.donator;

                    return (
                      <tr key={req._id}>
                        <td>{index + 1}</td>

                        {/* ---------- Food Info ---------- */}
                        <td className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask rounded-lg h-12 w-12">
                              <img
                                src={
                                  food?.food_image ||
                                  "https://via.placeholder.com/80"
                                }
                                alt={food?.food_name || "Food"}
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold">
                              {food?.food_name || "Unknown"}
                            </div>
                          </div>
                        </td>

                        {/* ---------- Donor Info ---------- */}
                        <td>
                          <div>
                            <div className="font-semibold">
                              {donor?.name || "Anonymous"}
                            </div>
                          </div>
                        </td>

                        {/* ---------- Status ---------- */}
                        <td>
                          {req.status === "Pending" ? (
                            <span className="badge badge-warning text-xs font-semibold text-primary">
                              {req.status}
                            </span>
                          ) : req.status === "Accepted" ? (
                            <span className="badge badge-success text-xs font-semibold text-primary">
                              {req.status}
                            </span>
                          ) : (
                            <span className="badge badge-error text-xs font-semibold text-primary">
                              {req.status}
                            </span>
                          )}
                        </td>

                        {/* ---------- Delete Button ---------- */}
                        <td>
                          {req.status === "Rejected" && (
                            <SecondaryButton
                              className="border-info bg-info hover:bg-info mr-2 w-24 mb-2 lg:mb-0"
                              hoverTextColor="group-hover:text-info"
                              onClick={() => handleReRequest(req.foodId)}
                            >
                              ReTry
                            </SecondaryButton>
                          )}
                          <SecondaryButton
                            className="border-error bg-error hover:bg-error w-24"
                            hoverTextColor="group-hover:text-error"
                            onClick={() => handleReqDelete(req._id)}
                          >
                            Delete
                          </SecondaryButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* table for sm screen */}
          <div className="md:hidden overflow-x-auto h-auto w-full p-4 bg-white rounded-lg shadow-md">
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Food Name</th>
                  <th>Donor</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {myRequests.map((req, index) => {
                  const food = foodTable[req.foodId];
                  const donor = food?.donator;

                  return (
                    <tr key={req._id}>
                      <th>{index + 1}</th>

                      {/* ---------- Food Info ---------- */}
                      <td className="flex items-center gap-2">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-12">
                            <img
                              src={
                                food?.food_image ||
                                "https://via.placeholder.com/80"
                              }
                              alt={food?.food_name || "Food"}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>{food?.food_name || "Unknown"}</div>
                      </td>

                      {/* ---------- Donor ---------- */}
                      <td>
                        <div>{donor?.name || "Anonymous"}</div>
                      </td>

                      {/* ---------- Status ---------- */}
                      <td>
                        {req.status === "Pending" ? (
                          <span className="badge badge-warning text-xs font-semibold badge-outline">
                            {req.status}
                          </span>
                        ) : req.status === "Accepted" ? (
                          <span className="badge badge-success text-xs font-semibold badge-outline">
                            {req.status}
                          </span>
                        ) : (
                          <span className="badge badge-error text-xs font-semibold badge-outline">
                            {req.status}
                          </span>
                        )}
                      </td>

                      {/* ---------- Actions ---------- */}
                      <td>
                        {req.status === "Rejected" && (
                          <SecondaryButton
                            className="border-info bg-info hover:bg-info mr-2 w-24 mb-2"
                            hoverTextColor="group-hover:text-info"
                            onClick={() => handleReRequest(req.foodId)}
                          >
                            ReTry
                          </SecondaryButton>
                        )}
                        <SecondaryButton
                          className="border-error bg-error hover:bg-error w-24"
                          hoverTextColor="group-hover:text-error"
                          onClick={() => handleReqDelete(req._id)}
                        >
                          Delete
                        </SecondaryButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyFoodRequest;
