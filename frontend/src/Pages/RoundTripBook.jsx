import { useEffect, useState } from "react";
import PlaneDetail from "../Components/BookFlight/PlaneDetail";
import PriceCalculation from "../Components/BookFlight/PriceCalculation";
import TravelerDetailForm from "../Components/BookFlight/TravelerDetailForm";
import { UseAuth } from "../Context/AuthContext";
import GetProfile from "../Hooks/GetProfile";
import { UseStateContext } from "../Context/StateContext";
import UseAxiosPrivate from "../Hooks/UseAxiosPrivate";
import RounddTripPriceCalculation from "../Components/BookFlight/RounddTripPriceCalculation";

const RoundTripBook = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const { roundTripBookingResult } = UseStateContext();
  const { user, userLoading, uid } = UseAuth();

  const { profileData, profileDataLoading, profileDataRefetch } =
    GetProfile(uid);

  const [numTravelers, setNumTravelers] = useState(1);

  const [travelersData, setTravelersData] = useState([]);

  const handleAddTraveler = (traveler) => {
    setTravelersData([...travelersData, traveler]);
  };

  //! function for booking a plane ticket
  const handleBookTicket = () => {
    console.log("booking !!!!");
    // console.log(travelersData);

    const bookData = { ...roundTripBookingResult, passengers: travelersData };

    console.log(bookData);

    axiosPrivateUrl
      .post("/api/order/init", bookData)
      .then((response) => {
        console.log(response?.data);
        console.log(response?.data?.url);

        const redirectUrl = response?.data?.url;
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //
  };

  //! useEffect to get total traveller number
  useEffect(() => {
    if (roundTripBookingResult) {
      const { travelers } = roundTripBookingResult;
      const totalTravelers = travelers.adult + travelers.children;
      setNumTravelers(totalTravelers);
    }
  }, [roundTripBookingResult]);

  console.log(roundTripBookingResult);

  return (
    <div className="bookflightContainer py-8 bg-gray-100  ">
      <div className="bookFlightWrapper  w-[90%] m-auto  flex justify-between items-center gap-x-5  ">
        {/* flight book left container starts  */}
        <div className="bookLeftCOntainer  w-[65%]   ">
          {/* plane detail section starts  */}
          <div className="planeDetailContainer flex flex-col gap-y-4      ">
            {roundTripBookingResult &&
              roundTripBookingResult?.airplane?.map((flightData, ind) => (
                <PlaneDetail key={ind} flightData={flightData} />
              ))}
          </div>
          {/* plane detail section ends  */}

          {/* traveler detail section starts  */}
          <div className="travelerDetail  mt-10 ">
            <h1 className=" text-2xl font-semibold mb-4  ">
              Enter Traveler Details{" "}
            </h1>

            {/* traveler detail form starts  */}
            <div className="travelerDetailForm flex flex-col gap-y-6 ">
              {[...Array(numTravelers)].map((_, index) => (
                <TravelerDetailForm
                  key={index}
                  onAddTraveler={handleAddTraveler}
                />
              ))}
            </div>
            {/* traveler detail form ends  */}

            {/* book now button starts  */}
            <div className="bookNow  mt-8 ">
              <button
                className=" py-2 px-5 primaryBg w-full text-gray-50 font-medium rounded-md  active:scale-95 hover:bg-red-600 "
                onClick={() => handleBookTicket()}
                // onClick={() => console.log(travelersData)}
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
        <div className="flightBookRight w-[35%] flex flex-col gap-y-4   ">
          {roundTripBookingResult &&
            roundTripBookingResult?.airplane?.map((flightData, ind) => (
              <PriceCalculation key={ind} flightData={flightData} />
            ))}

          <div className="totalFare bg-gray-50 shadow-md border border-gray-200 py-4 px-3 rounded-md text-lg font-semibold  flex justify-between      ">
            <h1> Total Fare : </h1>

            <h1> BDT {roundTripBookingResult?.fare} </h1>
          </div>
        </div>
        {/* flight book right container ends  */}
      </div>
    </div>
  );
};

export default RoundTripBook;
