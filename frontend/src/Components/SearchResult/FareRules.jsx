import React from "react";

const FareRules = () => {
  return (
    <div className="FareRulesContainer">
      <div className="FareRulesWrapper  border border-gray-300 ">
        {/* destination name starts  */}
        <div className="destinationCOntainer border-b border-gray-300 flex items-center px-2 py-1 ">
          <div className="airlineLogo h-9 w-9 ">
            <img
              src="https://i.ibb.co/b1CJwCN/biman-logo.jpg"
              className="  w-full h-full "
              alt=""
            />
          </div>
          <h1 className=" p-2 text-xl font-medium ">Dhaka to Chittagong</h1>
        </div>
        {/* destination name ends  */}

        {/* cancellation detail table starts  */}
        <div className="cancelTableContainer  py-3 px-2  mb-4    ">
          {/* table container starts  */}

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right   ">
              {/* table header starts  */}

              <thead className=" text-gray-600 uppercase bg-gray-50   ">
                <tr>
                  <th scope="col" className="px-6 py-3 border border-gray-400 ">
                    <h1 className=" text-gray-900 "> Cancellation</h1>
                    <h1 className="  text-xs text-gray-500 ">
                      (From Scheduled flight departure)
                    </h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border border-gray-400  "
                  >
                    <h1 className=" text-gray-900 "> Amount/Value</h1>
                    <h1 className="  text-xs text-gray-500 ">
                      (Per passenger)
                    </h1>
                  </th>
                </tr>
              </thead>
              {/* table header ends   */}

              {/* table body  starts  */}

              <tbody className=" text-gray-700  ">
                <tr className=" bg-white text-sm  ">
                  <td className="px-3 py-2 border border-gray-300">
                    Maximum penalty amount
                  </td>
                  <td className="px-3 py-2 border border-gray-300">
                    {" "}
                    Adult : BDT 2,000
                  </td>
                </tr>
                {/*  */}

                {/*  */}
              </tbody>
              {/* table body  ends   */}
            </table>
          </div>
          {/* table container ends   */}

          {/* warning container starts  */}
          <div className="warningContainer mt-3  ">
            <h1 className=" bg-red-100 text-sm p-1 rounded-md ">
              {" "}
              <span className=" font-semibold ">
                *Note For Voluntary Cancellation:
              </span>{" "}
              Service fees & gateway charges will be additionally applied on top
              of penalty amount. Some taxes may not be refundable
            </h1>
          </div>
          {/* warning container ends  */}

          {/*  */}
        </div>
        {/* cancellation detail table ends  */}

        {/* date table starts  */}
        <div className="dateTableContainer py-3 px-2 ">
          {/* table container starts  */}

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right   ">
              {/* table header starts  */}
              <thead className=" text-gray-600 uppercase bg-gray-50   ">
                <tr>
                  <th scope="col" className="px-6 py-3 border border-gray-400 ">
                    <h1 className=" text-gray-900 "> Date Change</h1>
                    <h1 className="  text-xs text-gray-500 ">
                      (From Scheduled flight departure)
                    </h1>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border border-gray-400  "
                  >
                    <h1 className=" text-gray-900 "> Amount/Value</h1>
                    <h1 className="  text-xs text-gray-500 ">
                      (Per passenger)
                    </h1>
                  </th>
                </tr>
              </thead>
              {/* table header ends   */}
              {/* table body  starts  */}
              <tbody className=" text-gray-700  ">
                <tr className=" bg-white text-sm  ">
                  <td className="px-3 py-2 border border-gray-300">
                    Maximum penalty amount
                  </td>
                  <td className="px-3 py-2 border border-gray-300">
                    {" "}
                    Adult : BDT 1,500
                  </td>
                </tr>
                {/*  */}

                {/*  */}
              </tbody>
              {/* table body  ends   */}
            </table>
          </div>
          {/* table container ends   */}

          {/* warning container starts  */}
          <div className="warningContainer mt-3  ">
            <h1 className=" bg-red-100 text-sm p-1 rounded-md ">
              {" "}
              <span className=" font-semibold ">
                *Note For Date Change:
              </span>{" "}
              Service Fees, Fare difference and Tax difference will be
              additionally applied on top of penalty amount which is
              nonrefundable in any circumstances.
            </h1>
          </div>
          {/* warning container ends  */}
        </div>
        {/* date table ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default FareRules;
