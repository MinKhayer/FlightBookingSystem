import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsArrowLeftRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UseStateContext } from "../../Context/StateContext";
import GetDestinations from "../../Hooks/GetDestinations";
import UseAxiosPrivate from "../../Hooks/UseAxiosPrivate";
import { inputFieldError, showError } from "../../Utils/ToastFunctions";
import ShowAirport from "../Home/ShowAirport";
import TravelerNumber from "./TravelerNumber";

const FlightSearch = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const { destinationsData } = GetDestinations();

  const [showStartDestination, setShowStartDestination] = useState(false);
  const [showEndDestination, setShowEndDestination] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureWeekName, setDepartureWeekName] = useState(null);
  const [returnDate, setReturnDate] = useState();
  const [returnWeekName, setReturnWeekName] = useState(null);
  const [clickTraveler, setClickTravel] = useState(false);

  const [startCIty, setStartCity] = useState(null);
  const [startAIrport, setStartAirport] = useState(null);
  const [endCIty, setEndCity] = useState(null);
  const [endAIrport, setEndAirport] = useState(null);

  const [roundTripCheck, setRoundTripCheck] = useState(false);
  const [oneWayTripCheck, setOneWayTripCheck] = useState(true);

  const [adultTraveler, setAdultTraveler] = useState(0);
  const [childTraveler, setChildTraveler] = useState(0);

  const [economyCheck, setEconomyCheck] = useState(false);
  const [businessCheck, setBusinessCheck] = useState(false);
  const [firstClassCheck, setFirstClassCheck] = useState(false);

  const navigate = useNavigate();

  const { setSearchResult } = UseStateContext();

  const toggleStartDestination = () => {
    setShowStartDestination(!showStartDestination);
    setShowEndDestination(false);
  };

  const toggleEndDestination = () => {
    setShowEndDestination(!showEndDestination);
    setShowStartDestination(false);
  };

  const toggleEconomy = () => {
    if (!economyCheck) {
      setBusinessCheck(false);
      setFirstClassCheck(false);
    }
    setEconomyCheck(!economyCheck);
  };

  const toggleBusiness = () => {
    if (!businessCheck) {
      setEconomyCheck(false);
      setFirstClassCheck(false);
    }
    setBusinessCheck(!businessCheck);
  };

  const toggleFirstCLass = () => {
    if (!firstClassCheck) {
      setEconomyCheck(false);
      setBusinessCheck(false);
    }
    setFirstClassCheck(!firstClassCheck);
  };

  //! function for setting return date
  const toggleReturnData = (date) => {
    if (date < departureDate)
      showError("Return Date can not before departure date");
    else {
      setReturnDate(date);
      setRoundTripCheck(true);
      setOneWayTripCheck(false);
    }
  };

  //! function for setting one way trip state
  const toggleOneWayTrip = () => {
    if (!oneWayTripCheck) {
      setRoundTripCheck(false);
    }
    setOneWayTripCheck(!oneWayTripCheck);
    setReturnDate(null);
  };

  //! function for setting round way trip state
  const toggleRoundTrip = () => {
    if (!roundTripCheck) {
      setOneWayTripCheck(false);
    }
    setRoundTripCheck(!roundTripCheck);
  };

  //!  function for open traveler number , class modal
  const openTravelModal = () => {
    setClickTravel(!clickTraveler);
  };

  //  ! effect to get departure weekend name
  useEffect(() => {
    const depDate = new Date(departureDate);
    const dayOfWeek = depDate.getDay();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekdayName = weekdays[dayOfWeek];
    setDepartureWeekName(weekdayName);
  }, [departureDate]);

  // ! effect to get return weekend name
  useEffect(() => {
    const retDate = new Date(returnDate);
    const dayOfWeek = retDate.getDay();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const weekdayName = weekdays[dayOfWeek];
    setReturnWeekName(weekdayName);
  }, [returnDate]);

  //! function for searching flight
  const handleSearchFlight = () => {
    console.log("search click !!!!");
    let bookingClass = "";

    if (economyCheck) {
      bookingClass = "economy";
    } else if (businessCheck) {
      bookingClass = "business";
    } else if (firstClassCheck) {
      bookingClass = "first class";
    }

    if (
      !startCIty ||
      !endCIty ||
      !bookingClass.trim() ||
      adultTraveler + childTraveler === 0
    ) {
      return inputFieldError();
    }

    let departure = departureDate.getTime();
    let arrival = 0;
    if (!returnDate) {
      arrival = 0;
    } else {
      arrival = returnDate.getTime();
    }

    const searchData = {
      from: startCIty,
      to: endCIty,
      departure: departure,
      roundTrip: roundTripCheck,
      returnDate: arrival,
      travelers: {
        adult: adultTraveler,
        children: childTraveler,
      },
      bookingClass,
    };

    axiosPrivateUrl
      .post("/api/airplane/search", searchData)
      .then((response) => {
        setSearchResult(response?.data);

        if (!response.data.status) {
          showError(response.data.message);
        }

        if (response?.data?.airplanes && !response?.data?.roundTrip) {
          navigate("/searchResult");
        }

        // ! for roundtrip
        if (response?.data?.airplanes && response?.data?.roundTrip) {
          navigate("/searchresultRoundtrip");
        }
      })
      .catch((error) => {
        showError("Error in search plane ");
        console.log(error);
      });

    //
  };

  //
  return (
    <div className="flightSearchFormContainer">
      <ToastContainer />
      <div className="flightSearchWrapper">
        {/* flight book form starts  */}
        <div className="flightBookForm bg-gray-50 border border-gray-300  w-[88%] m-auto py-10 px-5 rounded-md shadow-xl  ">
          <div
            className=" relative     "
          // onSubmit={handleSubmit(handleLogin)}
          >
            {/* form top , trip select section starts  */}
            <div className="tripSelect   flex items-center  gap-x-8 mb-4 ">
              {/* one way trip section starts  */}
              <div className="oneWayTrip  flex flex-row  items-center gap-x-2 ">
                <input
                  id="oneWay"
                  type="checkbox"
                  checked={oneWayTripCheck}
                  onClick={() => toggleOneWayTrip()}
                  className="w-4 h-4 border border-gray-300  bg-gray-50   "
                />
                <label
                  htmlFor="oneWay"
                  className="text-lg font-medium text-gray-700 "
                >
                  One Way
                </label>
              </div>
              {/* one way trip section ends  */}
              {/* round trip section starts  */}
              <div className="roundTrip  flex flex-row  items-center gap-x-2 ">
                <input
                  id="roundTrip"
                  type="checkbox"
                  checked={roundTripCheck}
                  onClick={() => toggleRoundTrip()}
                  className="w-4 h-4 border border-gray-300  bg-gray-50   "
                />
                <label
                  htmlFor="roundTrip"
                  className=" text-lg font-medium text-gray-700 "
                >
                  Round trip
                </label>
              </div>
              {/* round trip section ends  */}
              {/*  */}
            </div>
            {/* form top , trip select section ends  */}

            {/* form bottom section starts  */}
            <div className="formBottomSection   grid grid-cols-3 gap-x-2 ">
              {/* destination input section starts  */}
              <div className="destinationContainer  flex items-center justify-between relative ">
                {/* icon container starts / */}
                <div className=" z-[10] iconContainer bg-gray-50 text-red-600 border border-red-400  font-semibold text-lg p-2 rounded-full absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 shadow-lg  ">
                  <BsArrowLeftRight />
                </div>
                {/* icon container ends  */}

                {/* starts destination section stars  */}
                <div
                  className="startDestination  w-[50%] py-2 px-7 border border-gray-400 rounded-md  cursor-pointer relative  "
                  onClick={() => toggleStartDestination()}
                >
                  <h1 className="  text-gray-700 text-sm ">From : </h1>
                  <h1 className="  text-gray-900 font-bold text-sm ">
                    {startCIty ? startCIty : "City name"}
                  </h1>
                  <h1 className="  text-gray-700  text-xs ">
                    {startAIrport ? startAIrport : "Airport name"}{" "}
                  </h1>
                  {/* airport show  */}
                  {showStartDestination && (
                    <div className="airportShowSection  absolute top-[5.3rem] left-[0rem] z-[10]   ">
                      <ShowAirport
                        airports={destinationsData}
                        setCity={setStartCity}
                        setAirport={setStartAirport}
                      />
                    </div>
                  )}

                  {/* airport show ends  */}
                </div>
                {/* starts destination section ends  */}

                {/* end destination section starts  */}
                <div
                  className="endDestinationContainer w-[50%] py-2 px-7 border border-gray-400 rounded-md cursor-pointer relative "
                  onClick={() => toggleEndDestination()}
                >
                  <h1 className="  text-gray-700 text-sm  ">To : </h1>
                  <h1 className="  text-gray-900 font-bold text-sm ">
                    {endCIty ? endCIty : "City name"}
                  </h1>
                  <h1 className="  text-gray-700  text-xs ">
                    {endAIrport ? endAIrport : "Airport name"}
                  </h1>

                  {/* airport show  */}
                  {showEndDestination && (
                    <div className="airportShowSection  absolute top-[5.6rem] left-[0rem] z-[10]  ">
                      <ShowAirport
                        airports={destinationsData}
                        setCity={setEndCity}
                        setAirport={setEndAirport}
                      />
                    </div>
                  )}
                  {/* airport show ends  */}
                </div>
                {/* end destination section ends  */}

                {/*  */}
              </div>
              {/* destination input section ends  */}

              {/* date ,,time section starts  */}
              <div className="timeSection  rounded-md flex justify-between items-center ">
                {/* departure time section starts  */}
                <div className="departureSection  w-[50%] py-2 px-4 border border-gray-400 rounded-l-md cursor-pointer ">
                  <div className=" flex flex-row gap-x-2  items-center text-gray-700 text-sm ">
                    <h1>Departure </h1>
                    <IoIosArrowDown />
                  </div>

                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => {
                      if (date < new Date())
                        showError("Departure date can not be set to past");
                      else setDepartureDate(date);
                    }}
                    dateFormat="d MMMM yyyy"
                    className="  text-xl border-none outline-none  w-full bg-gray-50 cursor-pointer font-medium "
                  />
                  {departureWeekName && (
                    <h1 className=" text-gray-700 text-xs ">
                      {departureWeekName}
                    </h1>
                  )}
                </div>
                {/* departure time section ends  */}

                {/* return time section starts  */}
                <div
                  className={` returnSection  ${returnDate ? " h-auto " : " h-[5.1rem]"
                    }   w-[50%] py-2 px-4 border border-gray-400 rounded-r-md cursor-pointer    `}
                  htmlFor="dateInput "
                >
                  <div className="  flex flex-row gap-x-2  items-center text-gray-700 text-sm ">
                    <h1>Return </h1>
                    <IoIosArrowDown />
                  </div>

                  {returnDate ? (
                    <div>
                      <DatePicker
                        id="returnDate"
                        selected={returnDate}
                        // onChange={(date) => setReturnDate(date)}
                        onChange={(date) => toggleReturnData(date)}
                        dateFormat="d MMMM yyyy"
                        className="  text-xl border-none outline-none  w-full bg-gray-50 cursor-pointer font-medium "
                      />
                      {returnWeekName && (
                        <h1 className=" text-gray-700 text-xs ">
                          {returnWeekName}
                        </h1>
                      )}
                    </div>
                  ) : (
                    <div className="  ">
                      <label
                        htmlFor="returnDate"
                        className=" cursor-pointer font-medium  w-full block "
                      >
                        Tap to book return ticket
                      </label>{" "}
                      <DatePicker
                        id="returnDate"
                        selected={returnDate}
                        // onChange={(date) => setReturnDate(date)}
                        onChange={(date) => toggleReturnData(date)}
                        dateFormat="d MMMM yyyy"
                        className=" hidden text-xl border-none outline-none  w-full bg-gray-50 cursor-pointer font-medium "
                      />{" "}
                    </div>
                  )}
                </div>
                {/* return time section ends  */}

                {/*  */}
              </div>
              {/* date ,,time section ends  */}

              {/* traavel details section starts  */}
              <div
                className="travelDetails  py-2 px-4 rounded-md border border-gray-400 cursor-pointer relative   "
                onClick={() => openTravelModal()}
              >
                <h1 className="  text-gray-700 text-sm ">
                  Travel and booking class{" "}
                </h1>
                <h1 className="  text-gray-900 text-lg  font-semibold ">
                  {adultTraveler + childTraveler} traveler
                </h1>
                <h1 className="  text-gray-700 text-xs  ">
                  {economyCheck
                    ? "Economy"
                    : businessCheck
                      ? "Business"
                      : "First Class"}{" "}
                </h1>

                <div
                  className={`travelerNumForm ${clickTraveler ? "absolute" : "hidden"
                    }   transform -translate-x-1/2 -translate-y-1/2 top-[14.2rem] right-[-5rem] py-5 px-3 rounded-md bg-white border border-gray-200 shadow-lg `}
                  onClick={(e) => e.stopPropagation()}
                >
                  <TravelerNumber
                    adultTraveler={adultTraveler}
                    setAdultTraveler={setAdultTraveler}
                    childTraveler={childTraveler}
                    setChildTraveler={setChildTraveler}
                    toggleEconomy={toggleEconomy}
                    toggleBusiness={toggleBusiness}
                    toggleFirstCLass={toggleFirstCLass}
                    economyCheck={economyCheck}
                    businessCheck={businessCheck}
                    firstClassCheck={firstClassCheck}
                    openTravelModal={openTravelModal}
                  />
                </div>
              </div>
              {/* traavel details section ends  */}

              {/*  */}
            </div>
            {/* form bottom section ends  */}

            {/* search button starts  */}
            <div className="searchBtn">
              <button
                className=" py-2 px-8 bg-[#EB1933] text-gray-50 font-medium  rounded  absolute -bottom-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  "
                onClick={() => handleSearchFlight()}
              >
                Search
              </button>
            </div>
            {/* search button ends  */}

            {/*  */}
          </div>
        </div>
        {/* flight book form ends  */}
      </div>
    </div>
  );
};

export default FlightSearch;
