import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RoundtripFlightCard from "../Components/SearchResult/RoundtripFlightCard";
import FlightSearch from "../Components/Shared/FlightSearch";
import { UseStateContext } from "../Context/StateContext";
import UseAxiosPrivate from "../Hooks/UseAxiosPrivate";
import { authenticationFailed } from "../Utils/ToastFunctions";

const RoundTripSearch = () => {
  const navigate = useNavigate();

  const { axiosPrivateUrl } = UseAxiosPrivate();
  const { searchResult, setRoundtripBookingResult } = UseStateContext();
  const [forwardFlights, setForwardFlights] = useState([]);
  const [backwardFlights, setBackwardFlights] = useState([]);

  const [forwardPlaneSelect, setForwardPlaneSelect] = useState();
  const [backwardPlaneSelect, setBackwardPlaneSelect] = useState();

  // console.log(backwardFlights);
  // console.log(forwardPlaneSelect);
  // console.log(searchResult?.airplanes);

  //! function for purchasing ticket

  const handlePurchaseTicket = () => {
    console.log("purchase ticket !! ");
    // console.log(forwardPlaneSelect);
    // console.log(backwardPlaneSelect);

    const selectedPlane = [forwardPlaneSelect, backwardPlaneSelect];

    axiosPrivateUrl
      .post("/api/order/checkout", selectedPlane)
      .then((response) => {
        console.log(response?.data);
        setRoundtripBookingResult(response?.data);

        if (response?.data) {
          navigate("/rouundtripBook");
        }
      })
      .catch((error) => {
        authenticationFailed();
        console.log(error);
      });
  };

  //! effect to get forward result
  useEffect(() => {
    const forw = searchResult?.airplanes?.filter(
      (flight) => flight?.direction === "Forward"
    );
    // console.log(forw);
    setForwardFlights(forw);
  }, [searchResult]);

  //! effect to get backward result
  useEffect(() => {
    const bac = searchResult?.airplanes?.filter(
      (flight) => flight?.direction === "Backward"
    );
    // console.log(bac);
    setBackwardFlights(bac);
  }, [searchResult]);

  return (
    <div className="RoundTripSearchContainer bg-gray-200 ">
      <div className="RoundTripSearchWrapper w-[90%] m-auto py-3  ">
        {/* flight search fform starts  */}
        <div className="flightSearchFormSection  py-10 ">
          <FlightSearch />
        </div>
        {/* flight search form ends  */}
        {/*  */}
        {/* heading starts  */}
        <h1 className=" text-4xl font-semibold  my-6 text-center ">
          Flights from {searchResult && searchResult?.routeName}
        </h1>
        {/* heading ends  */}

        {/* search result container starts  */}
        <div className="searchResult  py-8  flex justify-between items-center self-center     ">
          {/* departure result starts  */}
          <div className=" departureResult   w-[49%] rounded-md  p-2    ">
            {/* heading starts  */}
            <h1 className=" text-3xl font-semibold  my-4 text-center ">
              Departure Flights
            </h1>
            {/* heading ends  */}
            {/* flight card container starts  */}
            <div className="flightCard   ">
              {/* forwardFlights */}

              {forwardFlights &&
                forwardFlights?.map((flight, ind) => {
                  return (
                    <RoundtripFlightCard
                      key={ind}
                      flightData={flight}
                      setPlaneSelect={setForwardPlaneSelect}
                      selectedPlane={forwardPlaneSelect}
                    />
                  );
                })}
            </div>
            {/* flight card container ends  */}
          </div>
          {/* departure result ends  */}
          {/*  */}

          {/* return result starts  */}
          <div className="returnResult w-[49%] rounded-md  p-2   ">
            {/* heading starts  */}
            <h1 className=" text-3xl font-semibold  my-4 text-center ">
              Return Flights
            </h1>
            {/* heading ends  */}
            {/* flight card container starts  */}
            <div className="flightCard   ">
              {backwardFlights &&
                backwardFlights?.map((flight, ind) => {
                  return (
                    <RoundtripFlightCard
                      key={ind}
                      flightData={flight}
                      setPlaneSelect={setBackwardPlaneSelect}
                      selectedPlane={backwardPlaneSelect}
                    />
                  );
                })}
            </div>
            {/* flight card container ends  */}
          </div>
          {/* return result ends  */}

          {/*  */}
        </div>
        {/* search result container ends  */}

        {/* purchase button starts  */}

        <div className="purchaseTicket   my-3 text-center   ">
          <button
            onClick={() => handlePurchaseTicket()}
            className=" primaryBg hover:bg-red-600 py-2 px-4 rounded-md text-gray-50 hover:text-gray-100 active:scale-95 font-medium  "
          >
            Purchase Ticket
          </button>
        </div>

        {/* purchase button ends  */}
      </div>
    </div>
  );
};

export default RoundTripSearch;
