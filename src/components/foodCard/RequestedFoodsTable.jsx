import toast from "react-hot-toast";
import Container from "../container/Container";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SecondaryButton from "../button/SecondaryButton";

const RequestedFoodsTable = ({ foodInfo }) => {
  const { requestedFoods, refresh, setRefresh, conditionalClass, food } =
    foodInfo;
  const axiosSecureInstance = useAxiosSecure();

  const handleAcceptRequest = (foodId, reqId) => {
    axiosSecureInstance
      .patch(`/requests/accept/${reqId}`, { foodId })
      .then((data) => {
        if (data.data.success) {
          toast.success(`You've accepted the food donation request`);
          setRefresh(!refresh);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleRejectRequest = (foodId, reqId) => {
    axiosSecureInstance
      .patch(`/requests/reject/${reqId}`, { foodId })
      .then((data) => {
        if (data.data.success) {
          toast.success(`You've rejected the food donation request`);
          setRefresh(!refresh);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Container>
      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-accent text-center">
            Request For this Food
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Below are all the requests made by people interested in this food
            donation. You can review their details and decide whether to accept
            or reject each request. Managing these properly ensures your donated
            food reaches the right hands quickly.
          </p>
        </div>

        <div className="overflow-x-auto bg-white p-4 rounded-lg text-accent shadow-md">
          {requestedFoods.length === 0 ? (
            <p className="text-center py-6 text-gray-500">
              Nobody have made any food requests yet.
            </p>
          ) : (
            <table className="table">
              <thead>
                <tr className="text-accent">
                  <th>SL No.</th>
                  <th>Requestor Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {requestedFoods.map((request, i) => (
                  <tr key={`${request._id}-${i}`}>
                    <td className="text-primary">
                      {i < 10 ? `0${i + 1}` : `${i + 1}`}
                    </td>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask h-12 w-12 rounded-lg">
                            <img
                              src={request?.requestor_image}
                              alt={request?.requestor_name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">
                            {request?.requestor_name}
                          </div>
                          <div className="text-sm opacity-50 text-primary">
                            {request?.requestor_phone}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="text-primary">{request?.requestor_email}</td>

                    <td>
                      <p
                        className={`badge text-xs font-semibold text-primary ${conditionalClass(
                          request?.status
                        )}`}
                      >
                        {request?.status}
                      </p>
                    </td>

                    <td>
                      <div className="flex gap-2 items-center">
                        <SecondaryButton
                          onClick={() =>
                            handleAcceptRequest(food._id, request._id)
                          }
                          hoverTextColor="group-hover:text-success"
                          className={`bg-success border-success px-3 py-1 text-sm ${
                            request.status === "Accepted" ||
                            request.status === "Rejected"
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={
                            request.status === "Accepted" ||
                            request.status === "Rejected"
                          }
                        >
                          Accept
                        </SecondaryButton>

                        <SecondaryButton
                          onClick={() =>
                            handleRejectRequest(food._id, request._id)
                          }
                          hoverTextColor="group-hover:text-error"
                          className={`bg-error border-error px-3 py-1 text-sm ${
                            request.status === "Accepted" ||
                            request.status === "Rejected"
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={
                            request.status === "Accepted" ||
                            request.status === "Rejected"
                          }
                        >
                          Reject
                        </SecondaryButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RequestedFoodsTable;
