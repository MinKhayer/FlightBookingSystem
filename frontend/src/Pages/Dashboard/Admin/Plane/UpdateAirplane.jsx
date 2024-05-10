import { useParams } from "react-router-dom";
import GetSingleAirplane from "../../../../Hooks/Airplane/GetSingleAirplane";
import { useEffect, useState } from "react";

import GetAllAIrline from "../../../../Hooks/Airline/GetAllAIrline";

const UpdateAirplane = () => {
  const { id } = useParams();

  const { airplaneData, airplaneDataLoading, airplaneDataRefetch } =
    GetSingleAirplane(id);

  const { allAirlineData, allAirlineLoading, allAirlineRefetch } =
    GetAllAIrline();

  const [airplaneName, setAirplaneName] = useState(null);
  const [airLineName, setAirLineName] = useState(null);
  const [airplaneModel, setAirplaneModel] = useState(null);
  const [airplaneSerial, setAirplaneSerial] = useState(null);
  const [airplaneCapacity, setAirplaneCapacity] = useState(null);

  //! function for updating airplane
  const handleAirplaneUpdate = () => {
    console.log("update airplane ");

    const airplaneUpdateData = {
      name: airplaneName,
      airline: airLineName,
      model: airplaneModel,
      serial: airplaneSerial,
      maximumCapacity: airplaneCapacity,
    };

    console.log(airplaneUpdateData);
  };

  useEffect(() => {
    setAirplaneName(airplaneData?.name);
    setAirLineName(airplaneData?.airline?._id);
    setAirplaneModel(airplaneData?.model);
    setAirplaneSerial(airplaneData?.serial);
    setAirplaneCapacity(airplaneData?.maximumCapacity);
  }, [airplaneData]);

  // console.log(allAirlineData);
  return (
    <div className="UpdateAirplaneContainer py-8 ">
      <div className="UpdateAirplaneWrapper  flex justify-center items-center ">
        {/* update airplane card starts  */}
        <div className="updateAirplaneCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300 ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Update Airplane
          </h1>

          <div className="updateAirplaneForm w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8 ">
            {/*Airplane name input starts */}
            <div className="flex flex-col gap-1 airplaneName">
              <label htmlFor="destinationName">Airplane name</label>
              <input
                type="text"
                id="AirplaneName"
                value={airplaneName}
                onChange={(e) => setAirplaneName(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />
            </div>
            {/*Airplane name input ends */}

            {/* airline name input starts  */}
            <div className="airlineName flex flex-col gap-1 ">
              <label htmlFor="airlineName">Airline name : </label>
              <select
                id="airlineName"
                value={airLineName}
                onChange={(e) => setAirLineName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="">Select airline</option>
                {allAirlineData &&
                  allAirlineData?.map((airline) => (
                    <option key={airline?._id} value={airline?._id}>
                      {" "}
                      {airline?.name}
                    </option>
                  ))}
              </select>
            </div>
            {/* airline name input ends  */}

            {/* airplane model name starts  */}
            <div className="airplaneModel  flex flex-col gap-1">
              <label htmlFor="airplaneModel">Airplane Model</label>
              <input
                type="text"
                id="airplaneModel"
                value={airplaneModel}
                onChange={(e) => setAirplaneModel(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />
            </div>
            {/* airplane model name ends  */}

            {/* airplane serial number starts  */}
            <div className="airplaneSeriaql flex flex-col gap-1 ">
              <label htmlFor="airplaneModel">Airplane Serial no : </label>
              <input
                type="number"
                id="airplaneSerial"
                value={airplaneSerial}
                onChange={(e) => setAirplaneSerial(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />
            </div>
            {/* airplane serial number ends  */}
            {/* airplane capacity starts  */}
            <div className="airplaneCapacity flex flex-col gap-1 ">
              <label htmlFor="airplaneCapacity">Airplane Capacity : </label>
              <input
                type="number"
                id="airplaneCapacity"
                value={airplaneCapacity}
                onChange={(e) => setAirplaneCapacity(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />
            </div>
            {/* airplane capacity ends  */}

            {/* update button starts  */}
            <div className="update">
              <button
                className=" w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
                onClick={() => handleAirplaneUpdate()}
              >
                Update
              </button>
            </div>
            {/* update button ends  */}
          </div>
        </div>
        {/* update airplane card ends  */}
      </div>
    </div>
  );
};

export default UpdateAirplane;
