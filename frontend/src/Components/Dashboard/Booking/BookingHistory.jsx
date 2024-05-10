import React from "react";
import BookingCard from "./BookingCard";

const BookingHistory = () => {
  return (
    <div className="BookingHistoryContainer">
      <div className="BookingHistoryWrapper py-9 px-14 ">
        {/* booking history card starts  */}
        <div className="bookingHistoryCard bg-gray-100 shadow-lg border border-gray-300 py-3 px-4  ">
          {/* header starts  */}
          <h1 className=" font-semibold mb-8 text-center text-2xl ">
            Flight Booking History{" "}
          </h1>
          {/* header ends  */}

          {/* flight history starts  */}
          <div className="flightHistory w-[90%] m-auto    ">
            <BookingCard />
          </div>
          {/* flight history ends  */}

          {/*  */}
        </div>
        {/* booking history card ends  */}
      </div>
    </div>
  );
};

export default BookingHistory;
