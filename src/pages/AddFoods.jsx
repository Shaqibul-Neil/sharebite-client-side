import Container from "../components/container/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const AddFoods = () => {
  const [expireDate, setExpireDate] = useState(null);
  const { user } = useAuth();
  const axiosInstance = useAxios();

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
    axiosInstance
      .post("/foods", newFood)
      .then((data) => {
        if (data.data.result.insertedId) {
          toast.success(`Congratulations! You've shared another bite`);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <Container className="py-16 space-y-12">
      {/* ---------- TEXT CONTENT ---------- */}
      <section className="bg-gray-50 px-6 md:px-16 text-primary space-y-6">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-accent">
          🍲 Share Your Food, Spread Some Love
        </h2>
        <p className="leading-relaxed">
          Got extra meals or leftover food that's still fresh? Don't let it go
          to waste — share it with those who need it most.
          <br />
          Fill out the form to add your food. Once submitted, it'll appear for
          people in need to request.
        </p>

        <div className="bg-white shadow-md p-6 rounded-lg border-l-4 border-accent space-y-3">
          <h3 className="font-semibold text-lg text-accent">
            🥦 Submission Guidelines:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Ensure the food is fresh and safe to eat.</li>
            <li>Mention quantity as number (e.g. 10 or 15).</li>
            <li>
              Add an image hosted on{" "}
              <span className="font-semibold text-accent">imgbb</span>.
            </li>
            <li>Provide accurate pickup location and expiry date.</li>
          </ul>
        </div>
      </section>

      {/* ---------- FORM ---------- */}
      <section className="bg-white py-12 px-6 md:px-16">
        <h3 className="text-2xl font-semibold text-center text-accent mb-8">
          Donate Food
        </h3>

        <form
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 text-primary"
          onSubmit={handleAddFood}
        >
          {/* Donator Info */}
          <div>
            <label className="block mb-1 font-medium">Donator Name</label>
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
            <label className="block mb-1 font-medium">Donator Email</label>
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
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your contact number"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
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
            <label className="block mb-1 font-medium">Food Name</label>
            <input
              type="text"
              name="food_name"
              placeholder="Enter food name"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Food Image (imgbb link)
            </label>
            <input
              type="url"
              name="food_image"
              placeholder="https://imgbb.com/your-image"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          {/* Quantity & Expiry Date */}
          <div>
            <label className="block mb-1 font-medium">Food Quantity</label>
            <input
              type="text"
              name="food_quantity"
              placeholder="e.g. 10 plates or Serves 2"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Expiry Date</label>
            <DatePicker
              selected={expireDate}
              name="expire_date"
              onChange={(date) => setExpireDate(date)}
              placeholderText="Select expiry date"
              className="lg:w-84 w-64 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Pickup Location</label>
            <input
              type="text"
              name="pickup_location"
              placeholder="Enter pickup address"
              className="w-64 lg:w-84 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block mb-1 font-medium">Additional Notes</label>
            <textarea
              rows="3"
              placeholder="Write any special info about the food..."
              name="additional_notes"
              className="lg:w-full w-64 bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
            ></textarea>
          </div>

          <div className="lg:col-span-3 md:col-span-2 sm:col-span-1 flex justify-end pt-4">
            <button
              type="submit"
              className="myBtn text-accent w-full py-2 rounded-md"
            >
              Submit Food
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default AddFoods;
