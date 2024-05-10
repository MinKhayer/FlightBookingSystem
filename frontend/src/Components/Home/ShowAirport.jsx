import { IoIosAirplane } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const ShowAirport = ({ airports, setCity, setAirport }) => {
  // console.log(airports);

  const handleSetStates = (obj) => {
    setCity(obj?.name);
    setAirport(obj?.airport);
  };

  return (
    <div className="airportShow bg-gray-50 w-[18rem] h-[12rem] border border-red-300  rounded-t-md overflow-auto shadow-md px-4 py-2 ">
      {/* show airport starts  */}
      {airports &&
        airports?.map((airport) => (
          <div
            key={airport?._id}
            className="airportShow px-1  flex items-center self-center gap-x-2  py-2 border-b border-red-200  "
            onClick={() => handleSetStates(airport)}
          >
            {/* top icon starts  */}
            <IoIosAirplane className=" text-red-600 font-bold  " />
            {/* top icon ends  */}

            <div className="    ">
              <h1 className=" cityName  font-medium "> {airport?.name} </h1>
              <h1 className=" airportName  text-xs text-gray-700 ">
                {" "}
                {airport?.airport}
              </h1>
            </div>

            {/*  */}
          </div>
        ))}

      {/* show airport ends  */}

      {/* airport show top ends  */}
    </div>
  );
};

export default ShowAirport;
