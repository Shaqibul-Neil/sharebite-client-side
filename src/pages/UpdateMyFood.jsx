import { useState } from "react";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "../components/container/Container";
import { useLocation } from "react-router";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import SecondaryButton from "../components/button/SecondaryButton";
import { MdUpdate } from "react-icons/md";

import {
  FaUser,
  FaUtensils,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaLeaf,
  FaCamera,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { Edit3, UtensilsCrossed } from "lucide-react";
import InfoBanner from "../components/banner/InfoBanner";

const UpdateMyFood = () => {
  const { user, refresh, setRefresh } = useAuth();
  const [expireDate, setExpireDate] = useState(null);
  const [foodPreview, setFoodPreview] = useState(null);
  const axiosSecureInstance = useAxiosSecure();
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
    axiosSecureInstance
      .put(`/update-food/${food._id}`, updateFood)
      .then(() => {
        toast.success("Your food information has been updated!");
      })
      .catch((err) => toast.error(err.message));

    setRefresh(!refresh);
  };

  // Live preview for food image URL
  const handleImageChange = (e) => {
    setFoodPreview(e.target.value);
  };

  return (
    <Container className="py-16 space-y-12">
      {/* ---------- Heading ---------- */}
      <section className="bg-gray-50 space-y-4 lg:mt-12 text-center">
        <div className="flex items-center flex-col lg:flex-row justify-center gap-3">
          <Edit3 className="text-warning text-3xl" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent">
            Update Your Donated Food
          </h1>
        </div>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          You're updating the food item{" "}
          <span className="leading-tight text-warning text-2xl font-extrabold">
            "{food?.food_name}"
          </span>
          . Make sure all details — like quantity, pickup location, and expiry
          date — are correct. Keeping your info updated helps ensure the food
          reaches those in need on time.
        </p>
      </section>

      {/* ---------- Extra Info Section ---------- */}
      <section className="max-w-5xl mx-auto px-4 md:px-0 space-y-10 text-gray-800">
        {/* Why Updates Matter */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-accent">
            <MdUpdate className="text-amber-600" />
            Updated Info = Faster Donations
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Whenever you change the quantity, expiry date, or pickup location,
            make sure to update your post. It helps receivers know if the food
            is still available and makes collection smoother for everyone
            involved.
          </p>
        </div>

        {/* Update Guidelines */}
        <div className="bg-yellow-50 p-6 rounded-2xl shadow-sm space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-yellow-700">
            <FaCheckCircle className="text-yellow-600" />
            Before You Update, Please Check 👇
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <FaLeaf className="text-green-500 mt-1" />
              <span>
                <strong>Freshness:</strong> Make sure the expiry date is
                correct. Avoid expired or spoiled food.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-blue-500 mt-1" />
              <span>
                <strong>Quantity:</strong> Clearly mention how many portions
                you’re donating (e.g., 5 packs, 3 meals, etc.).
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaCamera className="text-purple-500 mt-1" />
              <span>
                <strong>Image:</strong> Upload a clear and bright image so
                receivers can easily identify the food.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              <span>
                <strong>Pickup Info:</strong> Double-check the pickup time and
                location for accuracy.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <FaClock className="text-orange-500 mt-1" />
              <span>
                <strong>Change Notice:</strong> If the food runs out or
                conditions change, update the post immediately.
              </span>
            </li>
          </ul>
        </div>

        {/* Example Section */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Example:</h2>
          <p className="text-gray-700 italic">
            If you’re donating 5 burgers and 2 have already been collected,
            update your post to show “3 remaining.” This helps others avoid
            confusion and ensures fair distribution.
          </p>
        </div>

        {/* Reminder Section */}
        <div className="text-center space-y-2">
          <p className="text-lg font-medium text-gray-900">
            Every small update makes a big difference.
          </p>
          <p className="text-gray-600">
            Accurate information saves time, prevents waste, and ensures your
            effort truly helps someone in need. 🌍
          </p>
        </div>
      </section>

      {/* ---------- Form ---------- */}
      <section className="bg-white px-2 md:p-16 rounded-xl shadow-md space-y-8">
        <h3 className="text-3xl font-semibold text-center text-accent mb-8 flex items-center justify-center gap-2 md:flex-row flex-col">
          <UtensilsCrossed className="text-warning text-3xl" />{" "}
          <span>Update Food</span>
        </h3>

        <form className="space-y-8" onSubmit={handleUpdateFood}>
          {/* Donator Info */}
          <div className="bg-gray-50 md:p-6 py-4 px-2 rounded-lg shadow-inner space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <FaUser /> Donator Info
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                readOnly
                defaultValue={user.displayName}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={user.email}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                readOnly
                defaultValue={food?.donator.phone}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="url"
                name="image"
                readOnly
                defaultValue={user.photoURL}
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Food Info */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <FaUtensils /> Food Info
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="food_name"
                defaultValue={food?.food_name}
                placeholder="Food Name"
                required
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="url"
                name="food_image"
                onChange={handleImageChange}
                defaultValue={food?.food_image}
                placeholder="Food Image URL"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />

              {foodPreview && (
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">Image Preview:</p>
                  <img
                    src={foodPreview}
                    alt="Food Preview"
                    className="max-h-40 rounded-md border"
                  />
                </div>
              )}

              <input
                type="text"
                name="food_quantity"
                required
                defaultValue={food?.food_quantity}
                placeholder="Quantity (e.g., 10)"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <DatePicker
                selected={
                  expireDate ||
                  (food?.expire_date ? new Date(food.expire_date) : null)
                }
                name="expire_date"
                required
                onChange={(date) => setExpireDate(date)}
                placeholderText="Expiry Date"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Pickup & Notes */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <FaMapMarkerAlt /> Pickup & Notes
            </h4>
            <div className="grid md:grid-cols-1 gap-4">
              <input
                type="text"
                required
                name="pickup_location"
                defaultValue={food?.pickup_location}
                placeholder="Pickup Location"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <textarea
                name="additional_notes"
                rows="4"
                required
                defaultValue={food?.additional_notes}
                placeholder="Additional Notes"
                className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-amber-600 focus:border-amber-600 focus:outline-none resize-y"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <SecondaryButton
              type="submit"
              className="w-48 bg-warning hover:bg-warning/90 border-warning py-3"
              hoverTextColor="group-hover:text-warning"
            >
              Update Food
            </SecondaryButton>
          </div>
        </form>
      </section>
      <InfoBanner text={"Need help updating"} />
    </Container>
  );
};

export default UpdateMyFood;
