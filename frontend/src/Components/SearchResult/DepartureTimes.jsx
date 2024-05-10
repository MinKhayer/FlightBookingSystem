import React from "react";
import { WiSunrise } from "react-icons/wi";

const DepartureTimes = ({ departureTime }) => {
  const { icon, dayPart, time } = departureTime;

  return (
    <div className="DepartureTimesContainer   ">
      <div className="DepartureTimesWrapper  flex flex-col justify-center items-center self-center border border-black rounded-md  py-3  ">
        {/* icon starts  */}

        <div className="iconContainer text-4xl">{icon}</div>
        {/* icon ends  */}

        {/* day part starts  */}
        <div className="dayPartContainer">
          <h1 className="  font-medium pb-1 "> {dayPart} </h1>
        </div>
        {/* day part ends  */}

        {/* time starts  */}
        <div className="timeContainer">
          <h1 className=" text-sm "> {time} </h1>
        </div>
        {/* time ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default DepartureTimes;
