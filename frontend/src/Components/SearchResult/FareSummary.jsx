import React from "react";

const FareSummary = ({ flightData }) => {
  // console.log(flightData);

  const { fareCategory, fareTypes, basePrice, tax, travelers } = flightData;

  // console.log(fareCategory);
  // console.log(fareTypes[fareCategory]);
  // console.log(fareTypes);
  // console.log(price);
  // console.log(tax);
  // console.log(travelers);
  // console.log(travelers?.adult);

  //!  calculating base fare for adults
  const adultBaseFare = fareTypes[fareCategory] * travelers?.adult;

  // ! calculating base fare for children
  const childBaseFare =
    fareTypes[fareCategory] *
    (1 - fareTypes?.childDiscount / 100) *
    travelers?.children;

  const totalTraverller = travelers?.adult + travelers?.children;

  // console.log(adultBaseFare);
  // console.log(childBaseFare);

  return (
    <div className="FareSummaryContainer">
      <div className="FareSummaryWrapper border border-gray-400  ">
        {/* heading starts  */}
        <div className="Fareheading border-b border-gray-400 ">
          <h1 className=" p-2 text-2xl font-medium ">Fare breakdown</h1>
        </div>
        {/* heading ends  */}

        {/* fare table container starts  */}
        <div className="fareTableContainer px-2 py-4 ">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right   ">
              {/* table header starts  */}
              <thead className="text-xs text-gray-600 uppercase bg-gray-50   ">
                <tr>
                  <th scope="col" className="px-6 py-3 border border-gray-400 ">
                    Fare Summary
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border border-gray-400  "
                  >
                    Base Fare (including tax)
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 border border-gray-400  "
                  >
                    Taxes + Fees
                  </th> */}

                  <th
                    scope="col"
                    className="px-6 py-3 border border-gray-400   "
                  >
                    Total
                  </th>
                </tr>
              </thead>
              {/* table header ends   */}

              {/* table body  starts  */}

              <tbody className=" text-gray-500  ">
                {/* row for traveler starts */}
                {travelers?.adult > 0 && (
                  <tr className=" bg-white text-sm  ">
                    <td className="px-3 py-2 border border-gray-300">
                      Adult ({travelers?.adult})
                    </td>
                    <td className="px-3 py-2 border border-gray-300">
                      BDT {fareTypes[fareCategory]}
                    </td>
                    {/* <td className="px-3 py-2 border border-gray-300">
                      {" "}
                      BDT {tax}{" "}
                    </td> */}

                    <td className="px-3 py-2 font-medium border border-gray-300 text-gray-800 ">
                      BDT {adultBaseFare}
                    </td>
                  </tr>
                )}
                {/* row for traveler ends */}

                {/* row for child starts  */}
                {travelers?.children > 0 && (
                  <tr className=" bg-white text-sm  ">
                    <td className="px-3 py-2 border border-gray-300">
                      Children ({travelers?.children})
                    </td>
                    <td className="px-3 py-2 border border-gray-300">
                      BDT {fareTypes[fareCategory]}
                    </td>
                    {/* <td className="px-3 py-2 border border-gray-300">
                      {" "}
                      BDT {tax}{" "}
                    </td> */}

                    <td className="px-3 py-2 font-medium border border-gray-300 text-gray-800 ">
                      BDT {childBaseFare}
                    </td>
                  </tr>
                )}
                {/* row for child ends  */}

                {/*  */}

                <tr className=" bg-white text-sm  ">
                  <td className="px-3 py-2 border border-gray-300 text-gray-700 font-medium  ">
                    Total ( {totalTraverller} traveler )
                  </td>
                  <td className="px-3 py-2 border border-gray-300"></td>

                  <td className="px-3 py-2 font-medium border border-gray-300 text-gray-800 ">
                    BDT {basePrice}
                  </td>
                </tr>

                {/*  */}
              </tbody>
              {/* table body  ends   */}
            </table>
          </div>
        </div>
        {/* fare table container ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default FareSummary;
