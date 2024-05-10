import React, { useState } from "react";
import { UseAuth } from "../Context/AuthContext";
import GetProfile from "../Hooks/GetProfile";
import PlaneDetail from "../Components/BookFlight/PlaneDetail";
import TravelerDetailForm from "../Components/BookFlight/TravelerDetailForm";
import PriceCalculation from "../Components/BookFlight/PriceCalculation";

const RoundtripFlightBook = () => {
  const { user, userLoading, uid } = UseAuth();
  const { profileData, profileDataLoading, profileDataRefetch } =
    GetProfile(uid);

  const [userName, setUserName] = useState(profileData?.name || "");
  const [userEmail, setUserEmail] = useState(profileData?.user?.email || "");
  const [userPhone, setUserPhone] = useState(profileData?.phone || "");
  const [userCity, setUserCity] = useState(profileData?.city || "");
  const [userCountry, setUserCountry] = useState(profileData?.country || "");
  const [userPassport, setUserPassport] = useState("");

  const propValue = {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userPhone,
    setUserPhone,
    userCity,
    setUserCity,
    userCountry,
    setUserCountry,
    userPassport,
    setUserPassport,
  };

  //! function for booking a plane ticket
  const handleBookTicket = () => {
    console.log("booking !!!!");
    console.log(userName);
    console.log(userEmail);
    console.log(userPhone);
    console.log(userCity);
    console.log(userCountry);
    console.log(userPassport);
    console.log("");

    //
  };

  // console.log(user);
  // console.log(uid);
  console.log(profileData);

  return (
    <div className="RoundtripFlightBookContainer py-8 bg-gray-100  ">
      <div className="RoundtripFlightBookWrapper w-[90%] m-auto  flex justify-between items-center gap-x-5  ">
        {/* flight book left container starts  */}
        <div className="bookLeftCOntainer  w-[65%]   ">
          {/* plane detail section starts  */}
          <div className="planeDetailContainer   ">
            <PlaneDetail />
          </div>
          {/* plane detail section ends  */}

          {/* traveler detail section starts  */}
          <div className="travelerDetail  mt-10 ">
            <h1 className=" text-2xl font-semibold mb-4  ">
              Enter Traveler Details{" "}
            </h1>

            {/* traveler detail form starts  */}
            <div className="travelerDetailForm ">
              <TravelerDetailForm prop={propValue} />
            </div>
            {/* traveler detail form ends  */}

            {/* book now button starts  */}
            <div className="bookNow  mt-8 ">
              <button
                className=" py-2 px-5 primaryBg w-full text-gray-50 font-medium rounded-md  active:scale-95 hover:bg-red-600 "
                onClick={() => handleBookTicket()}
              >
                Book Now
              </button>
            </div>
            {/* book now button ends  */}

            {/*  */}
          </div>
          {/* traveler detail section ends  */}

          {/*  */}
        </div>
        {/* flight book left container ends  */}

        {/* flight book right container starts  */}
        <div className="flightBookRight w-[35%] flex flex-col gap-y-7   ">
          <PriceCalculation />
          <PriceCalculation />
        </div>
        {/* flight book right container ends  */}
      </div>
    </div>
  );
};

export default RoundtripFlightBook;
