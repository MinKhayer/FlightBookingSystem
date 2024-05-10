import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateAirline = () => {
  const { id } = useParams();
  const [airlineName, setAirlineName] = useState(null);
  const [airlineCode, setAirlineCode] = useState(null);

  //! functionn for updating airline information
  const handleAirlineUpdate = () => {
    console.log("update click ");
  };

  return (
    <div className="UpdateAirlineContainer">
      <div className="UpdateAirlineWrapper h-screen flex justify-center items-center ">
        {/* update Airline card starts  */}
        <div className="updateAirlineCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300 ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Update Airline
          </h1>

          <div className="updateAirlineForm w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8 ">
            {/*Airline name input starts */}
            <div className="flex flex-col gap-1 destinationName">
              <label htmlFor="destinationName">Airline name</label>
              <input
                type="text"
                id="destinationName"
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />
            </div>
            {/*Airline name input ends */}

            {/* airline code input starts  */}
            <div className="flex flex-col gap-1 airlineCode">
              <label htmlFor="destinationName">Airline Code</label>
              <input
                type="text"
                id="airlineCode"
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline Code"
              />
            </div>
            {/* airline code input ends  */}

            {/* update button starts  */}
            <div className="update">
              <button
                className=" w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
                onClick={() => handleAirlineUpdate(id)}
              >
                Update
              </button>
            </div>
            {/* update button ends  */}
          </div>
        </div>
        {/* update Airline card ends  */}
      </div>
    </div>
  );
};

export default UpdateAirline;
