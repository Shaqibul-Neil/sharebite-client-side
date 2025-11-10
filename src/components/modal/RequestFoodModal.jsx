import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const RequestFoodModal = ({ foodInfo }) => {
  const {
    requestModalRef,
    user,
    food,
    requestedFoods,
    setRequestedFoods,
    setRefresh,
    refresh,
  } = foodInfo;
  const axiosInstance = useAxios();
  const handleFoodRequest = (e) => {
    e.preventDefault();
    e.preventDefault;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const phone = e.target.phone.value;
    const newRequest = {
      foodId: food._id,
      requestor_name: name,
      requestor_email: email,
      requestor_phone: phone,
      requestor_image: image,
      status: "Pending",
    };
    axiosInstance.post("/requests", newRequest).then((data) => {
      if (data.data?.result.insertedId) {
        requestModalRef.current.close();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request has been placed",
          showConfirmButton: false,
          timer: 1500,
        });
        newRequest._id = data.data.result.insertedId;
        const totalRequest = [...requestedFoods, newRequest];
        setRequestedFoods(totalRequest);
        setRefresh(!refresh);
        e.target.reset();
      }
    });
  };
  return (
    <dialog
      className="modal modal-bottom sm:modal-middle"
      ref={requestModalRef}
    >
      <div className="modal-box py-10">
        <h2 className="text-center text-xl font-semibold text-primary">
          Request This Food
        </h2>

        <div className="modal-action">
          <form
            method="dialog"
            className="w-full space-y-5 text-primary"
            onSubmit={handleFoodRequest}
          >
            {/* User Info (Auto-filled) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block mb-1 text-accent">Requested By</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none transition-all"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 text-accent">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none transition-all"
                />
              </div>

              <div className="relative">
                <label className="block mb-1 text-accent">
                  Profile Photo URL
                </label>
                <input
                  type="url"
                  name="image"
                  defaultValue={user?.photoURL}
                  readOnly
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none transition-all"
                />
              </div>
              {/* Contact Number */}
              <div className="relative">
                <label className="block mb-1 text-accent">Contact No.</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +8801XXXXXXXXX"
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="relative">
              <label className="block mb-1 text-accent">Write Location</label>
              <input
                type="text"
                name="location"
                required
                placeholder="Enter your current location"
                className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none transition-all"
              />
            </div>

            {/* Why Need Food */}
            <div className="relative">
              <label className="block mb-1 text-accent">Why Need Food</label>
              <textarea
                name="reason"
                required
                placeholder="Describe your situation briefly..."
                rows="3"
                className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none transition-all"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => requestModalRef.current.close()}
                className="w-32 rounded-md border-accent border-2 cursor-pointer text-accent font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn myBtn text-white w-40 rounded-md"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default RequestFoodModal;
