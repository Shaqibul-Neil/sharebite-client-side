import Container from "../components/container/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {
  FaUser,
  FaUtensils,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaUtensilSpoon,
  FaHandsHelping,
} from "react-icons/fa";
import SecondaryButton from "../components/button/SecondaryButton";
import { CheckCircle2, ListCheck, UtensilsCrossed } from "lucide-react";
import InfoBanner from "../components/banner/InfoBanner";

const AddFoods = () => {
  const [expireDate, setExpireDate] = useState(null);
  const [foodPreview, setFoodPreview] = useState(null);
  const { user } = useAuth();
  const axiosSecureInstance = useAxiosSecure();

  const handleAddFood = (e) => {
    e.preventDefault();
    const newFood = {
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
      .post("/foods", newFood)
      .then((data) => {
        if (data.data.result.insertedId) {
          toast.success(`🎉 Congratulations! You've shared another bite!`);
          e.target.reset();
          setFoodPreview(null);
          setExpireDate(null);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  // Live preview for food image URL
  const handleImageChange = (e) => {
    setFoodPreview(e.target.value);
  };

  return (
    <Container className="py-16 space-y-12">
      <title>ShareBite - Add Food</title>
      {/* ---------- Heading & Info ---------- */}
      <section className="bg-gray-50 space-y-4 lg:mt-12">
        <div className="flex items-center flex-col lg:flex-row justify-center gap-3">
          <FaHandsHelping className="text-warning text-3xl" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent text-center">
            Share Your Food, Spread Some Love
          </h1>
        </div>

        <p className="text-gray-700 leading-relaxed text-center lg:mb-24 mb-12">
          Got extra meals or leftover food that's still fresh? Don't let it go
          to waste — share it with those who need it most. Fill out the form
          below to add your food. Once submitted, it'll appear for people in
          need.
        </p>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-accent text-center flex items-center justify-center gap-2 md:flex-row flex-col">
            <ListCheck className="text-warning text-3xl"></ListCheck> Submission
            Guidelines
          </h3>
          <div className="text-gray-600 space-y-1">
            <p className="flex gap-2 items-center flex-col md:flex-row">
              <CheckCircle2 className="shrink-0 text-warning w-6 h-6 mt-1" />{" "}
              <span>
                Always make sure the food you're sharing is{" "}
                <span className="font-semibold text-accent">
                  fresh, hygienic,
                </span>
                and safe for others to consume. Avoid donating food that has
                been stored for too long or exposed to heat.{" "}
              </span>
            </p>

            <p className="flex gap-2 items-center flex-col md:flex-row">
              <CheckCircle2 className="shrink-0 text-warning w-6 h-6 mt-1" />{" "}
              <span>
                Clearly mention the{" "}
                <span className="font-semibold text-accent">
                  exact quantity
                </span>{" "}
                of food you’re donating (e.g., 10 packs or 15 meals). This helps
                receivers understand how much is available and plan accordingly.
              </span>
            </p>

            <p className="flex gap-2 items-center flex-col md:flex-row">
              <CheckCircle2 className="shrink-0 text-warning w-6 h-6 mt-1" />{" "}
              <span>
                Upload a clear image of the food using{" "}
                <span className="font-semibold text-accent">imgbb</span> or a
                similar image hosting service. A good-quality photo builds trust
                and helps others quickly identify the food type.{" "}
              </span>
            </p>

            <p className="flex gap-2 items-center flex-col md:flex-row">
              <CheckCircle2 className="shrink-0 text-warning w-6 h-6 mt-1" />{" "}
              <span>
                Make sure to provide an{" "}
                <span className="font-semibold text-accent">
                  accurate pickup location{" "}
                </span>
                and the{" "}
                <span className="font-semibold text-accent">expiry date</span>{" "}
                of the food. This ensures quick collection and prevents food
                from going to waste.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Form ---------- */}
      <section className="bg-white px-2 md:p-16 rounded-xl shadow-md space-y-8">
        <h3 className="text-3xl font-semibold text-center text-accent mb-8 flex items-center justify-center gap-2 md:flex-row flex-col">
          <UtensilsCrossed className="text-warning text-3xl" />{" "}
          <span>Donate Food</span>
        </h3>

        <form className="space-y-8" onSubmit={handleAddFood}>
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
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={user.email}
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="url"
                name="image"
                readOnly
                defaultValue={user.photoURL}
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
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
                required
                placeholder="Food Name"
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <input
                type="url"
                name="food_image"
                required
                placeholder="Food Image URL"
                onChange={handleImageChange}
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              {foodPreview && (
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 mb-1">Image Preview:</p>
                  <img
                    src={foodPreview}
                    alt="Food Preview"
                    className="max-h-40 rounded-3xl"
                  />
                </div>
              )}
              <input
                type="number"
                name="food_quantity"
                required
                placeholder="Quantity (e.g., 10)"
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <DatePicker
                selected={expireDate}
                onChange={(date) => setExpireDate(date)}
                placeholderText="Expiry Date"
                minDate={new Date()}
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Logistics */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <FaMapMarkerAlt /> Pickup & Notes
            </h4>
            <div className="grid md:grid-cols-1 gap-4">
              <input
                type="text"
                name="pickup_location"
                required
                placeholder="Pickup Location"
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none"
              />
              <textarea
                name="additional_notes"
                rows="4"
                required
                placeholder="Additional Notes"
                className="w-full py-2 px-3 bg-gray-100 border border-gray-300 rounded-3xl focus:ring-amber-600 focus:border-amber-600 focus:outline-none resize-y"
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
              Submit Food
            </SecondaryButton>
          </div>
        </form>
      </section>
      <InfoBanner text={"Need help donating"} />
    </Container>
  );
};

export default AddFoods;
