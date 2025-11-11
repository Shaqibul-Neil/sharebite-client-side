import { MdEmail } from "react-icons/md";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SecondaryButton from "../button/SecondaryButton"; // তোমার reusable button path অনুযায়ী ঠিক করে নিও

const FoodDetailsCard = ({ foodInfo }) => {
  const { food, requestModalRef, user, conditionalClass } = foodInfo;
  const filteredDate = new Date(food.expire_date).toLocaleDateString();

  const handleRequestModal = () => {
    requestModalRef.current.showModal();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back link */}
      <div className="mb-6">
        <Link
          to="/available-foods"
          className="text-sm font-medium text-accent hover:text-accent transition"
        >
          &larr; Back to Available Foods
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT SIDE - IMAGE */}
        <div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={food.food_image}
              alt={food.food_name}
              className="rounded-lg w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* RIGHT SIDE - TABS */}
        <div className="bg-white px-6">
          <Tabs>
            <TabList className="flex gap-4 border-b border-gray-200 pb-2">
              <Tab
                selectedClassName="text-warning border-b-2 border-warning"
                className="cursor-pointer py-1 font-semibold text-accent hover:text-warning focus:outline-none"
              >
                Food Description
              </Tab>
              <Tab
                selectedClassName="text-warning border-b-2 border-warning"
                className="cursor-pointer px-2 py-1 font-semibold text-accent hover:text-warning focus:outline-none"
              >
                Donor Information
              </Tab>
            </TabList>

            {/* FOOD DESCRIPTION TAB */}
            <TabPanel>
              <div className="space-y-4 mt-4 text-left">
                <h2 className="text-2xl font-bold text-accent">
                  {food?.food_name}
                </h2>
                <span
                  className={`badge badge-outline ${conditionalClass(
                    food?.food_status
                  )}`}
                >
                  {food?.food_status}
                </span>

                <div className="space-y-2 mt-2 text-gray-600">
                  <p className="text-sm font-semibold">
                    Quantity :{" "}
                    <span className="font-normal">
                      {food.food_quantity < 10
                        ? `0${food.food_quantity}`
                        : food.food_quantity}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Expire :</span>{" "}
                    <span className="text-red-500 font-medium">
                      {filteredDate}
                    </span>
                  </p>
                  <p className="text-sm font-semibold">
                    Notes :{" "}
                    <span className=" text-gray-600 font-normal">
                      {food.additional_notes || "No notes provided"}
                    </span>
                  </p>
                  <p className="text-sm mt-2 font-semibold">
                    Donated by :{" "}
                    <span className="font-normal">
                      {food.donator.name || "Anonymous"}
                    </span>
                  </p>
                  <div className="flex items-center gap-2">
                    <MapPin color="red" size={18} />{" "}
                    <span>{food.pickup_location}</span>
                  </div>
                </div>

                {user?.email !== food.donator.email && (
                  <div className="w-full mt-4">
                    <SecondaryButton
                      className={
                        "w-48 bg-warning hover:bg-warning border-warning py-3"
                      }
                      hoverTextColor="group-hover:text-warning"
                      onClick={handleRequestModal}
                    >
                      Request Food
                    </SecondaryButton>
                  </div>
                )}
              </div>
            </TabPanel>

            {/* DONOR INFORMATION TAB */}
            <TabPanel>
              <div className="space-y-4 mt-4 text-left">
                <div className="flex gap-4 items-center">
                  <div className="h-14 w-14 rounded-lg overflow-hidden">
                    <img
                      src={food.donator.image}
                      alt={food.donator.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">
                      {food.donator.name || "Anonymous"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {food.donator.email}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                  <SecondaryButton
                    className="w-44 py-2 border-blue-500 text-blue-500 bg-blue-500 hover:bg-blue-500"
                    hoverTextColor="group-hover:text-blue-500"
                    onClick={() =>
                      (window.location.href = `mailto:${food.donator.email}`)
                    }
                  >
                    <span className="flex items-center gap-1">
                      <MdEmail size={18} /> <span>Send Message</span>
                    </span>
                  </SecondaryButton>

                  <SecondaryButton
                    className="w-44 py-2 bg-success text-success border-success hover:bg-success"
                    hoverTextColor="group-hover:text-success"
                    onClick={() =>
                      (window.location.href = `tel:${food.donator.phone}`)
                    }
                  >
                    <span className="flex items-center gap-1">
                      {" "}
                      <Phone size={16} />
                      <span>Call Donor</span>
                    </span>
                  </SecondaryButton>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
