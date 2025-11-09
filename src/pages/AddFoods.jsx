import Container from "../components/container/Container";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const AddFoods = () => {
  const [expireDate, setExpireDate] = useState(null);
  const { user } = useAuth();

  return (
    <Container>
      <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ---------- LEFT SIDE ---------- */}
          <div className="space-y-6 text-primary">
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-accent">
              🍲 Share Your Food, Spread Some Love
            </h2>
            <p className="leading-relaxed">
              Got extra meals or leftover food that's still fresh? Don't let it
              go to waste — share it with those who need it most.
              <br />
              Fill out the form to add your food. Once submitted, it'll appear
              for people in need to request.
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
          </div>

          {/* ---------- RIGHT SIDE (FORM) ---------- */}
          <div className="bg-white md:p-8 p-2 rounded-lg">
            <h3 className="text-2xl font-semibold text-center text-accent mb-6">
              Donate Food
            </h3>

            <form className="space-y-4 text-primary">
              {/* Donator Info */}
              <div>
                <label className="block mb-1 font-medium">Donator Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  readOnly
                  defaultValue={user.displayName}
                  className="w-full bg-gray-100 border border-accent p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Donator Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  readOnly
                  defaultValue={user.email}
                  className="w-full bg-gray-100 border border-accent p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Photo URL</label>
                <input
                  type="url"
                  placeholder="Your Photo URL"
                  readOnly
                  defaultValue={user.photoURL}
                  className="w-full bg-gray-100 border border-accent p-2 rounded-md"
                />
              </div>

              {/* Food Info */}
              <div>
                <label className="block mb-1 font-medium">Food Name</label>
                <input
                  type="text"
                  placeholder="Enter food name"
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Food Image (imgbb link)
                </label>
                <input
                  type="url"
                  placeholder="https://imgbb.com/your-image"
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
                />
              </div>

              {/* Quantity & Expiry Date*/}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">
                    Food Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10 plates or Serves 2"
                    className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1 font-medium">Expiry Date</label>
                  <DatePicker
                    selected={expireDate}
                    onChange={(date) => setExpireDate(date)}
                    placeholderText="Select expiry date"
                    className="w-64 md:w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Pickup Location
                </label>
                <input
                  type="text"
                  placeholder="Enter pickup address"
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Additional Notes
                </label>
                <textarea
                  rows="3"
                  placeholder="Write any special info about the food..."
                  className="w-full bg-gray-50 border border-accent p-2 rounded-md focus:outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="myBtn text-accent w-full py-2 rounded-md"
                >
                  Submit Food
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default AddFoods;
