import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState("test state context");
  const [singleTripBookResult, setSingleTripBookResult] = useState(
    "test single trip book result !!"
  );

  const [roundTripBookingResult, setRoundtripBookingResult] = useState(
    "roundtrip booking result !!"
  );

  const [upcomingPlaneDetail, setUpcomingPlaneDetail] = useState(
    "upcoming plane detail !!!"
  );

  return (
    <StateContext.Provider
      value={{
        searchResult,
        setSearchResult,
        singleTripBookResult,
        setSingleTripBookResult,
        roundTripBookingResult,
        setRoundtripBookingResult,
        upcomingPlaneDetail,
        setUpcomingPlaneDetail,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => {
  return useContext(StateContext);
};
