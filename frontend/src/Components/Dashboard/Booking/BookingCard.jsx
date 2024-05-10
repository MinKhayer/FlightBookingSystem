import React from "react";

const BookingCard = () => {
  return (
    <div className="BookingCardContainer">
      <div className="BookingCardWrapper bg-gray-50 shadow-md overflow-auto rounded-xl  ">
        {/* booking card top starts  */}
        <div className="bookingCardTop bg-red-500 py-2 px-4 flex justify-between items-center   ">
          {/* airline info starts  */}
          <div className="airlineName bg-sky-300 flex justify-center items-center gap-x-2 ">
            {/* airline logo  starts  */}

            <div className="planeLogo">
              <img src="" className=" h-full w-full " alt="plane logo " />
            </div>
            {/* airline logo  ends   */}

            {/* airline name starts  */}
            <div className="airlineName">
              <h1>US Bangla Airlines</h1>
            </div>
            {/* airline name ends  */}
          </div>
          {/* airline info ends  */}

          {/* ticket status starts  */}
          <div className="ticketStatus  text-sm font-medium text-gray-50 ">
            <h1>Ticket Status : Pending</h1>
            <h1>Booking ID : FL479YVB7873</h1>
          </div>
          {/* ticket status ends  */}

          {/* ticket payment  relatedd info starts  */}
          <div className="ticketPayment  flex  justify-between  items-center gap-x-4  ">
            {/* ticket price starts  */}
            <h1 className=" text-gray-50 font-semibold ">BDT 4,638</h1>
            {/* ticket price ends  */}

            {/* payment status starts  */}
            <div className="paymentStatus bg-white cursor-pointer py-1 px-2.5 rounded text-sm font-medium ">
              <h1 className=" text-red-600 ">unpaid</h1>
            </div>
            {/* payment status ends  */}

            {/* pay button  starts  */}
            <div className="payNow bg-gray-50 hover:bg-gray-100 hover:shadow-md cursor-pointer py-1 px-2.5 rounded text-sm font-medium ">
              <h1>pay now </h1>
            </div>
            {/* pay button  ends  */}

            {/*  */}
          </div>
          {/* ticket payment  relatedd info ends   */}

          {/*  */}
        </div>
        {/* booking card top ends  */}
        {/*  */}

        {/* booking card bottom starts  */}
        <div className="bookingCardBottom bg-lime-200 py-2 px-4 ">
          <h1>booking card bottom </h1>
          <h1>booking card bottom </h1>
        </div>
        {/* booking card bottom ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default BookingCard;
