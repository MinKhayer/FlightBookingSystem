import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GetSingleRoute from "../../../../Hooks/Route/GetSingleRoute";
import GetDestinations from "../../../../Hooks/GetDestinations";

const UpdateRoute = () => {
  const { id } = useParams();

  const { destinationsData, destinationsDataLoading, destinationsDataRefetch } =
    GetDestinations();
  const { routeData, routeDataLoading, routeDataRefetch } = GetSingleRoute(id);

  const currentDate = new Date();
  currentDate.setHours(16);
  currentDate.setMinutes(30);

  const [startDestinationsList, setStartDestinationList] = useState(null);
  const [endDestinationsList, setEndDestinationList] = useState(null);
  const [departureDate, setDepartureData] = useState(currentDate);
  const [arrivalDate, setArrivalData] = useState(currentDate);
  const [departureDay, setDepartureDay] = useState(null);
  const [startDestinationId, setStartDestinationId] = useState(null);
  const [endDestinationId, setEndDestinationId] = useState(null);

  //! function for updating route
  const handleUpdateRoute = () => {
    console.log("update ropute ");
  };

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
    <div className="updateRouteContainer py-8 ">
      <div className="updateRouteWrapper  flex justify-center items-center ">
        {/* add route card starts  */}
        <div className="updateRouteCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Update Route
          </h1>

          <div className=" UpdateRouteForm w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  ">
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
                dateFormat="MMMM d, yyyy h:mm aa"
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
                dateFormat="MMMM d, yyyy h:mm aa"
                className=" border border-gray-400 py-1 px-3 rounded-lg "
              />
            </div>
            {/* arrival time date ends  */}

            <button
              onClick={() => handleUpdateRoute()}
              className="flex items-center justify-center w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
            >
              Update Route
            </button>
          </div>
        </div>
        {/* add route card ends  */}
      </div>
    </div>
  );
};

export default UpdateRoute;
