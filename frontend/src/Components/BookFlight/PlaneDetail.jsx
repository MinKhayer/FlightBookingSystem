import React from "react";

const PlaneDetail = ({ flightData }) => {
  // console.log(flightData);
  return (
    <div className="PlaneDetailContainer">
      <div className="PlaneDetailWraqpper  bg-gray-50 rounded-md border border-gray-200 shadow-md py-4 px-3  ">
        {/* plane detail top starts  */}
        <div className="detailTop   flex justify-between items-center border-b border-gray-300 py-5   ">
          {/* detail left starts  */}
          <div className="detailLeft  flex justify-between items-center gap-x-4  ">
            {/* left logo starts  */}
            <div className="leftLogo h-12 w-12   ">
              <img
                // src="https://i.ibb.co/b1CJwCN/biman-logo.jpg"
                src={flightData?.airline?.logo}
                className=" w-full h-full "
                alt=""
              />
            </div>
            {/* left logo ends  */}

            {/* right detail starts  */}
            <div className="planedetails">
              <h1 className="  airlineName text-sm text-gray-600 pb-2 ">
                {flightData?.airline?.name}
              </h1>

              <div className="planeModel  text-sm font-medium  flex justify-between items-center gap-x-4 ">
                <h1>Aircraft : {flightData?.model} </h1>

                <h1>Operated by : {flightData?.airline?.code} </h1>
              </div>
            </div>
            {/* right detail ends  */}
          </div>
          {/* detail left ends  */}

          {/* detail right starts  */}
          {/* <div className="detailRight text-gray-500 ">
            <h1>Economy Class </h1>
          </div> */}
          {/* detail right ends  */}
        </div>
        {/* plane detail top ends  */}

        {/* plane detail bottom starts  */}
        {/* flight detail section starts  */}
        <div className="flightDetailContainer pt-4 flex justify-evenly ">
          {/* deeparture info starts  */}
          <div className="departure  ">
            <h1 className=" departureTime text-sm text-gray-600 mb-1.5 ">
              Depart
            </h1>
            <h1 className=" departureTime font-medium  ">
              {" "}
              {flightData?.route?.departure} : 00{" "}
            </h1>
            {/* <h1 className=" departureDate text-gray-600 text-sm mb-1.5 ">
              Fri, 15 Mar 2024
            </h1> */}

            {/* start place starts  */}
            <h1 className=" text-gray-500 font-semibold mt-1.5  ">
              {flightData?.route?.from?.name}
            </h1>
            {/* start place ends  */}

            {/* airport name starts  */}
            <h1 className=" text-xs text-gray-500 font-medium  ">
              {flightData?.route?.from?.airport}
            </h1>
            {/* airport name ends   */}
          </div>
          {/* deeparture info ends  */}

          {/* flight duration info starts  */}
          <div className="flightDurationInfo  flex flex-col justify-center items-center  ">
            <img
              src="https://i.ibb.co/8dXwmxt/non-stop-shape-removebg-preview.png"
              alt=""
            />
          </div>
          {/* flight duration info ends  */}

          {/* arrival info starts  */}
          <div className="arriveInfo   ">
            <h1 className=" departureTime text-sm text-gray-600 mb-1.5 ">
              Arrive
            </h1>
            <h1 className=" departureTime font-medium  ">
              {" "}
              {flightData?.route?.arrival} : 00{" "}
            </h1>
            {/* <h1 className=" departureDate text-gray-600 text-sm mb-1.5 ">
              Fri, 15 Mar 2024
            </h1> */}
            {/* start place starts  */}
            <h1 className=" text-gray-500 font-semibold mt-1.5   ">
              {flightData?.route?.to?.name}
            </h1>
            {/* start place ends  */}

            {/* end airport name  */}
            <h1 className=" text-xs text-gray-500 font-medium  ">
              {flightData?.route?.to?.airport}
            </h1>
            {/* end airport name  */}
          </div>
          {/* arrival info ends  */}

          {/*  */}
        </div>
        {/* flight detail section ends  */}
        {/* plane detail bottom ends  */}
      </div>
    </div>
  );
};

export default PlaneDetail;
