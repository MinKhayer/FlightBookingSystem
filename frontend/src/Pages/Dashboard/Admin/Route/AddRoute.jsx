import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetDestinations from "../../../../Hooks/GetDestinations";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import {
  inputFieldError,
  routeCreatedSuccessfully,
} from "../../../../Utils/ToastFunctions";

const AddRoute = () => {
  const { destinationsData, destinationsDataLoading, destinationsDataRefetch } =
    GetDestinations();

  const { axiosPrivateUrl } = UseAxiosPrivate();

  const currentDate = new Date();

  const [startDestinationsList, setStartDestinationList] = useState(null);
  const [endDestinationsList, setEndDestinationList] = useState(null);
  const [departureDate, setDepartureData] = useState(currentDate);
  const [arrivalDate, setArrivalData] = useState(currentDate);
  const [departureDay, setDepartureDay] = useState(null);
  const [startDestinationId, setStartDestinationId] = useState(null);
  const [endDestinationId, setEndDestinationId] = useState(null);

  //! function for crearing a route
  const handleAddRoute = () => {
    if (!startDestinationId || !endDestinationId) {
      inputFieldError();

      return;
    }

    const routeData = {
      from: startDestinationId,
      to: endDestinationId,
      departure: departureDate.getHours(),
      arrival: arrivalDate.getHours(),
      day: departureDay,
    };

    console.log(routeData);

    axiosPrivateUrl
      .post("/api/route", routeData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data) {
          routeCreatedSuccessfully();
        }
      })
      .catch((error) => {
        console.log("error in add route ");
        console.log(error);
      });

    //
  };

  // ! effect to get departure day /
  useEffect(() => {
    const dayOfWeek = departureDate.getDay();
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
    setDepartureDay(weekdayName);
  }, [departureDate]);

  //! effect to  set start destination to state
  useEffect(() => {
    setStartDestinationList(destinationsData);
  }, [destinationsData]);

  //! effect to set  end destination list to state
  useEffect(() => {
    setStartDestinationList(destinationsData);
    if (startDestinationId) {
      const updateList = destinationsData.filter(
        (destination) => destination._id !== startDestinationId
      );
      return setEndDestinationList(updateList);
    }

    return setEndDestinationList(destinationsData);
  }, [destinationsData, startDestinationId]);

  return (
    <div className="AddRouteContainer">
      <ToastContainer />
      <div className="AddRouteWrapper h-screen flex justify-center items-center ">
        {/* add route card starts  */}
        <div className="addRouteCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Add Route
          </h1>

          <div className=" AddRouteForm w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  ">
            {/* starting airport name input starts  */}
            <div className="flex flex-col gap-1 departureStart">
              <label htmlFor="departureStart">From : </label>
              <select
                id="departureStart"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                onChange={(e) => setStartDestinationId(e.target.value)}
              >
                <option value="">Starting Destination</option>
                {startDestinationsList &&
                  startDestinationsList?.map((destination) => (
                    <option
                      key={destination?._id}
                      value={`${destination?._id}`}
                    >
                      {" "}
                      {destination?.name}
                    </option>
                  ))}
              </select>
            </div>
            {/* starting airport name input ends  */}

            {/* ending airport name input starts   */}
            <div className="flex flex-col gap-1 departureEnd">
              <label htmlFor="departureEnd">To: </label>

              <select
                id="departureEnd"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                onChange={(e) => setEndDestinationId(e.target.value)}
              >
                <option value="">Ending Destination</option>

                {endDestinationsList &&
                  endDestinationsList?.map((destination) => (
                    <option
                      key={destination?._id}
                      value={`${destination?._id}`}
                    >
                      {" "}
                      {destination?.name}
                    </option>
                  ))}
              </select>
            </div>
            {/* ending airport name input ends   */}

            {/* departure date-time  starts  */}

            <div className="flex flex-col gap-1 departureDate">
              <label htmlFor="departureTime">Departure time : </label>

              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureData(date)}
                showTimeSelect
                // dateFormat="MMMM d, yyyy h:mm aa"
                dateFormat=" h:mm aa"
                className=" border border-gray-400 py-1 px-3 rounded-lg "
              />
            </div>
            {/* departure date-time ends  */}

            {/* arrival time date starts  */}
            <div className="flex flex-col gap-1 arrivalDate">
              <label htmlFor="departureTime">Arrival time : </label>

              <DatePicker
                selected={arrivalDate}
                onChange={(date) => setArrivalData(date)}
                showTimeSelect
                // dateFormat="MMMM d, yyyy h:mm aa"
                dateFormat=" h:mm aa"
                className=" border border-gray-400 py-1 px-3 rounded-lg "
              />
            </div>
            {/* arrival time date ends  */}

            <button
              onClick={() => handleAddRoute()}
              className="flex items-center justify-center w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
            >
              Add Route
            </button>
          </div>
        </div>
        {/* add route card ends  */}
      </div>
    </div>
  );
};

export default AddRoute;
