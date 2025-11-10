import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import Container from "../container/Container";

const RequestedFoodsTable = ({ foodInfo }) => {
  const { requestedFoods, refresh, setRefresh, conditionalClass, food } =
    foodInfo;
  const axiosInstance = useAxios();
  const handleAcceptRequest = (foodId, reqId) => {
    axiosInstance
      .patch(`/requests/accept/${reqId}`, { foodId })
      .then((data) => {
        if (data.data.success) {
          toast.success(`You've accepted the food donation request`);
          setRefresh(!refresh);
        }
      })
      .catch((err) => toast.error(err.message));
  };
  const handleRejectRequest = (reqId) => {
    axiosInstance
      .patch(`/requests/reject/${reqId}`)
      .then((data) => {
        console.log(data);
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
        <h2 className="text-3xl font-bold text-accent text-center">
          Request For this Food<span className="text-primary"></span>
        </h2>
        <div className="overflow-x-auto bg-white p-4 rounded-lg text-accent">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-accent">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>SL No.</th>
                <th>Requestor Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestedFoods.map((request, i) => (
                <tr key={`${request._id} - ${i}`}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td className="text-primary">{i + 1}</td>
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
                      className={`badge primary text-xs font-semibold text-primary ${conditionalClass(
                        request?.status
                      )}`}
                    >
                      {request?.status}
                    </p>
                  </td>

                  <td>
                    <div className="flex gap-2 items-center">
                      <button
                        className="btn btn-outline btn-success btn-xs"
                        onClick={() =>
                          handleAcceptRequest(food._id, request._id)
                        }
                      >
                        Accept Request
                      </button>
                      <button
                        className="btn btn-outline btn-error btn-xs"
                        onClick={() => {
                          handleRejectRequest(request._id);
                        }}
                      >
                        Reject Request
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default RequestedFoodsTable;
