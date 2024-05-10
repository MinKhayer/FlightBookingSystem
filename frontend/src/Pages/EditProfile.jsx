import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetUserInfo from "../Hooks/GetUserInfo";
import UseAxiosPrivate from "../Hooks/UseAxiosPrivate";
import {
  inputFieldError,
  profileUpdatedSuccessfully,
} from "../Utils/ToastFunctions";

const EditProfile = () => {
  const { userInfo } = GetUserInfo();
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState(null);
  const [userCountry, setUserCountry] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPostCode, setUserPostCode] = useState("");

  //!   function for updating user profile

  const handleUpdateProfile = () => {
    if (
      userName.trim() === "" ||
      userPhone === null ||
      userCountry.trim() === "" ||
      userCity.trim() === "" ||
      userState.trim() === "" ||
      userAddress.trim() === "" ||
      userPostCode.trim() === ""
    ) {
      inputFieldError();
      return;
    }

    const updatedValue = {
      name: userName,
      phone: userPhone,
      address: userAddress,
      city: userCity,
      state: userState,
      country: userCountry,
      postcode: userPostCode,
    };

    console.log(updatedValue);

    axiosPrivateUrl
      .patch(`/api/profile/${userInfo?._id}`, updatedValue)
      .then((response) => {
        console.log(response?.data);

        if (response?.data) {
          profileUpdatedSuccessfully();
          setTimeout(() => {
            navigate("/dashboard/profile");
          }, 1200);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   console.log(userInfo?._id);

  return (
    <div className="EditProfileContainer py-8 ">
      <ToastContainer />
      <div className="EditProfileWrapper flex justify-center items-center ">
        {/* edit profile card starts  */}
        <div className="editProfileCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Update Profile
          </h1>

          <div className="updateProfileForm w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8 ">
            {/*userName input starts */}
            <div className="flex flex-col gap-1 userName ">
              <label htmlFor="userName">User name</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter User name"
              />
            </div>
            {/*userName input ends */}

            {/* user phone number input starts  */}
            <div className="flex flex-col gap-1 userPhone ">
              <label htmlFor="userPhone">User Phone number</label>
              <input
                type="number"
                id="userPhone"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter User phone number"
              />
            </div>
            {/* user phone number input ends  */}

            {/* user country input starts  */}
            <div className="flex flex-col gap-1 userCountry ">
              <label htmlFor="userCity">User Country</label>
              <input
                type="text"
                id="userCountry"
                value={userCountry}
                onChange={(e) => setUserCountry(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter User country"
              />
            </div>
            {/* user country input ends  */}

            {/* user city input starts  */}
            <div className="flex flex-col gap-1 userCity ">
              <label htmlFor="userCity">User City</label>
              <input
                type="text"
                id="userCity"
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter User city"
              />
            </div>
            {/* user city input ends  */}

            {/* user state input starts  */}
            <div className="flex flex-col gap-1 userState ">
              <label htmlFor="userState">User state</label>
              <input
                type="text"
                id="userState"
                value={userState}
                onChange={(e) => setUserState(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter User state"
              />
            </div>
            {/* user state input ends  */}

            {/* user address input starts  */}

            <div className="flex flex-col gap-1 userAddress ">
              <label htmlFor="userAddress">User address</label>
              <input
                type="text"
                id="userAddress"
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter User Address"
              />
            </div>

            {/* user address input ends  */}

            {/* postcode input starts  */}
            <div className="flex flex-col gap-1 userPostCode ">
              <label htmlFor="userPostCode">Post Code </label>
              <input
                type="number"
                id="userPostCode"
                value={userPostCode}
                onChange={(e) => setUserPostCode(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter Post Code"
              />
            </div>
            {/* postcode input ends  */}

            {/* update button starts  */}
            <div className="update">
              <button
                className=" w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
                onClick={() => handleUpdateProfile()}
              >
                Update
              </button>
            </div>
            {/* update button ends  */}
          </div>
        </div>
        {/* edit profile card ends  */}
      </div>
    </div>
  );
};

export default EditProfile;
