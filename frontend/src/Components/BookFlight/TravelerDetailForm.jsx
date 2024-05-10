import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { passengerAddedSuccessfully } from "../../Utils/ToastFunctions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TravelerDetailForm = ({ onAddTraveler }) => {
  // console.log(prop);

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userCity: "",
    userCountry: "",
    userPassport: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    // Pass the formData to the parent component
    onAddTraveler(formData);

    passengerAddedSuccessfully();
  };

  return (
    <div className="TravelerDetailFormContainer">
      <ToastContainer />
      <div className="TravelerDetailFormWrapper py-4 px-6  bg-gray-50 border border-gray-200 rounded-md shadow  ">
        {/* form container starts */}
        <div className="formContainer py-6 grid grid-cols-2 gap-x-8 gap-y-5  ">
          {/*  name input starts  */}
          <div className="nameInput">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5"
              placeholder="First name"
              required
            />
          </div>
          {/*  name input ends   */}

          {/* email input starts  */}
          <div className="emailInput">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5"
              placeholder="Email"
              required
            />
          </div>
          {/* email input ends  */}

          {/* contact number info starts  */}
          <div className="contactInfo">
            <label
              htmlFor="contact"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contact
            </label>

            <input
              type="number"
              id="contact"
              name="userPhone"
              value={formData.userPhone}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5"
              placeholder="Contact number"
              required
            />
          </div>
          {/* contact number info ends  */}

          {/* passport number input starts  */}
          <div className="userNid input ">
            <label
              htmlFor="userNid"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nid / Birth certificate
            </label>
            <input
              type="number"
              id="userNid"
              name="userNid"
              value={formData.userNid}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="Passport number"
              required
            />
          </div>
          {/* passport number input ends  */}

          {/* city input starts  */}
          <div className="cityInput">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="userCity"
              value={formData.userCity}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="City"
              required
            />
          </div>
          {/* city input ends  */}

          {/* country input starts  */}
          <div className="countryInput">
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="userCountry"
              value={formData.userCountry}
              onChange={handleChange}
              className=" bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-md outline-none block w-full p-2.5 "
              placeholder="country"
              required
            />
          </div>
          {/* country input ends  */}

          <div className="actions  ">
            {/* Button to add the traveler */}
            <button
              className="  py-2 px-5 primaryBg w-full text-gray-50 font-medium rounded-md active:scale-95 hover:bg-red-600"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>

          {/*  */}
        </div>
        {/* form container ends  */}
      </div>
    </div>
  );
};

export default TravelerDetailForm;
