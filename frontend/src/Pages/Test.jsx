import React, { useState } from "react";
import FlightSearch from "../Components/Shared/FlightSearch";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Test = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="testContainer">
      <div className="testWrapper h-screen w-[90%] m-auto py-10 ">
        <div className="parentContainer bg-sky-100  ">
          {/* date ,,time section starts  */}
          <div className="timeSection  rounded-md flex justify-between items-center my-8 ">
            {/* departure time section starts  */}
            <div className="departureSection  w-[50%] py-2 px-4 border border-gray-400 rounded-l-md cursor-pointer ">
              <div className=" flex flex-row gap-x-2  items-center text-gray-700 text-sm ">
                <h1>Departure </h1>
                <IoIosArrowDown />
              </div>

              <h1 className=" text-gray-900 font-semibold text-lg ">
                7 Mar 2024
              </h1>
              <h1 className=" text-gray-700 text-xs ">Thursday</h1>
            </div>
            {/* departure time section ends  */}

            {/* return time section starts  */}
            <div
              className="returnSection  w-[50%] py-2 px-4 border border-gray-400 rounded-r-md cursor-pointer   "
              htmlFor="dateInput "
            >
              <div className=" flex flex-row gap-x-2  items-center text-gray-700 text-sm ">
                <h1>Reurn </h1>
                <IoIosArrowDown />
              </div>

              <h1 className=" text-gray-900 font-semibold text-lg ">
                7 Mar 2024
              </h1>
              <h1 className=" text-gray-700 text-xs ">Thursday</h1>
            </div>
            {/* return time section ends  */}

            {/*  */}
          </div>
          {/* date ,,time section ends  */}

          {/* date of birth input starts  */}
          <div className="dateOfBirthInput bg-fuchsia-400 py-2 text-center  ">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="d MMMM , yyyy"
              className=" text-center text-2xl border-none outline-none  "
            />
          </div>
          {/* date of birth input ends */}
        </div>
      </div>
    </div>
  );
};

export default Test;
