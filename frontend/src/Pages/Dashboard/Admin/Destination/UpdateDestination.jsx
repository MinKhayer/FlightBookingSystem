import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetSingleDestination from "../../../../Hooks/GetSingleDestination";

const UpdateDestination = () => {
  const { id } = useParams();

  const { destinationData, destinationDataLoading, destinationDataRefetch } =
    GetSingleDestination(id);

  console.log(destinationData);

  const [destinationName, setDestinationName] = useState();
  const [airporttName, setAirportName] = useState();

  //! function for updating destination
  const handleDestinationUpdate = (id) => {
    console.log("update ");
  };

  //! effect to set previous data to state
  useEffect(() => {
    setDestinationName(destinationData?.name);
    setAirportName(destinationData?.airport);
  }, [destinationData]);

  return (
    <div className="UpdateDestinationContainer">
      <div className="UpdateDestinationWrapper h-screen flex justify-center items-center ">
        {/* update destination card starts  */}
        <div className="updateDestinationCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300 ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Update Destination
          </h1>

          <div className="updateDestinationForm w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8 ">
            {/*destination name input starts */}
            <div className="flex flex-col gap-1 destinationName">
              <label htmlFor="destinationName">Destination name</label>
              <input
                type="text"
                id="destinationName"
                value={destinationName}
                onChange={(e) => setDestinationName(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />
            </div>
            {/*destination name input ends */}

            {/* airport name  starts  */}

            <div className="flex flex-col gap-1 airportName">
              <label htmlFor="airportName">Airport name</label>
              <input
                type="text"
                id="airportName"
                value={airporttName}
                onChange={(e) => setAirportName(e.target.value)}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airport name"
              />
            </div>
            {/* airport name ends  */}

            {/* update button starts  */}
            <div className="update">
              <button
                className=" w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
                onClick={() => handleDestinationUpdate(id)}
              >
                Update
              </button>
            </div>
            {/* update button ends  */}
          </div>
        </div>
        {/* update destination card ends  */}
      </div>
    </div>
  );
};

export default UpdateDestination;
