import FlightCard from "../Components/SearchResult/FlightCard";
import FlightSearch from "../Components/Shared/FlightSearch";
import { UseStateContext } from "../Context/StateContext";

const SearchResult = () => {
  const { searchResult } = UseStateContext();
  // console.log(searchResult);
  // console.log(searchResult?.routeName);
  // console.log(searchResult?.airplanes);

  return (
    <div className="searchResultContainer   ">
      <div className="searchResultWrapper  w-[90%] m-auto py-3 ">
        {/* flight search form starts  */}
        <div className="flightSearchFormSection  py-9 ">
          <FlightSearch />
        </div>
        {/* flight search form ends  */}
        {/*  */}

        {/* search result container starts  */}
        <div className="searchResult  py-8  flex justify-center items-center self-center     ">
          {/* flight result container  starts  */}
          <div className="searchContainer   w-[70%] rounded-md  p-2   ">
            {/* heading starts  */}
            {/* <h1 className=" text-4xl font-semibold  mb-14 text-center ">
              Flights from Dhaka to Chittagong{" "}
            </h1> */}
            <h1 className=" text-4xl font-semibold  mb-14 text-center ">
              Flights from {searchResult && searchResult?.routeName}
            </h1>
            {/* heading ends  */}

            {/* flight card container starts  */}
            <div className="flightCard   ">
              {searchResult &&
                searchResult?.airplanes?.map((flight, ind) => (
                  <FlightCard key={ind} flightData={flight} />
                ))}
            </div>
            {/* flight card container ends  */}

            {/*  */}
          </div>
          {/* flight result container  ends  */}
        </div>
        {/* search result container ends  */}
      </div>
    </div>
  );
};

export default SearchResult;
