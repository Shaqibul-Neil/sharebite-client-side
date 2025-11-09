import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "../components/container/Container";
import { useLocation } from "react-router";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const UpdateMyFood = () => {
  const { user, refresh, setRefresh } = useAuth();
  const [expireDate, setExpireDate] = useState(null);
  const axiosInstance = useAxios();
  const location = useLocation();
  const { food } = location?.state || {};

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const updateFood = {
      donator: {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        image: e.target.image.value,
      },
      food_name: e.target.food_name.value,
      food_image: e.target.food_image.value,
      food_quantity: +e.target.food_quantity.value,
      expire_date: expireDate,
      pickup_location: e.target.pickup_location.value,
      additional_notes: e.target.additional_notes.value,
      food_status: "Available",
    };
    axiosInstance
      .put(`/update-food/${food._id}`, updateFood)
      .then(() => {
        toast.success("Your food Information has been updated");
      })
      .catch((err) => toast.error(err.message));

    setRefresh(!refresh);
  };
  return (
    <Container>
      <section className="bg-white py-12 px-6 md:px-16 space-y-16">
        <div className="text-center mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-accent">
            Update Your Donated Food 🍱
          </h2>
          <p className="text-primary max-w-2xl mx-auto">
            You're updating the food item{" "}
            <span className="font-semibold text-primary">
              "{food?.food_name}"
            </span>
            . Make sure all details — like quantity, pickup location, and expiry
            date — are correct. Keeping your info updated helps us ensure the
            food reaches those in need on time.
          </p>{" "}
        </div>

        <form
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 text-primary"
          onSubmit={handleUpdateFood}
        >
          {/* Donator Info */}
          <div>
            <label className="block mb-1 font-medium text-accent">
              Donator Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              readOnly
              name="name"
              defaultValue={user.displayName}
              className="w-64 lg:w-84 bg-gray-100 border border-accent p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium  text-accent">
              Donator Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              readOnly
              defaultValue={user.email}
              className="w-64 bg-gray-100 border border-accent p-2 lg:w-84 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium  text-accent">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              defaultValue={food.donator.phone}
              readOnly
              placeholder="Enter your contact number"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium  text-accent">
              Photo URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="Your Photo URL"
              readOnly
              defaultValue={user.photoURL}
              className="w-64 lg:w-84 bg-gray-100 border border-accent p-2 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium  text-accent">
              Food Name
            </label>
            <input
              type="text"
              name="food_name"
              defaultValue={food?.food_name}
              placeholder="Enter food name"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium  text-accent">
              Food Image (imgbb link)
            </label>
            <input
              type="url"
              name="food_image"
              defaultValue={food?.food_image}
              placeholder="https://imgbb.com/your-image"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          {/* Quantity & Expiry Date */}
          <div>
            <label className="block mb-1 font-medium  text-accent">
              Food Quantity
            </label>
            <input
              type="text"
              name="food_quantity"
              defaultValue={food?.food_quantity}
              placeholder="e.g. 10 plates or Serves 2"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium  text-accent">
              Expiry Date
            </label>
            <DatePicker
              selected={
                expireDate ||
                (food?.expire_date ? new Date(food.expire_date) : null)
              }
              name="expire_date"
              onChange={(date) => setExpireDate(date)}
              placeholderText="Select expiry date"
              className="lg:w-84 w-64 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium  text-accent">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickup_location"
              defaultValue={food?.pickup_location}
              placeholder="Enter pickup address"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block mb-1 font-medium  text-accent">
              Additional Notes
            </label>
            <textarea
              rows="3"
              placeholder="Write any special info about the food..."
              name="additional_notes"
              defaultValue={food?.additional_notes}
              className="lg:w-full w-64 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            ></textarea>
          </div>

          <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 flex justify-end pt-4">
            <button
              type="submit"
              className="myBtn text-accent w-full py-2 rounded-md"
            >
              Update Information
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default UpdateMyFood;
