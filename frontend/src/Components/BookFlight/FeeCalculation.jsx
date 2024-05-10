import React from "react";

const FeeCalculation = ({
  travellerCategory,
  travellerNumber,
  baseFare,
  discount,
}) => {
  // console.log(discount);

  return (
    <div className="FeeCalculationContainer">
      <div className="FeeCalculationWrapper border-b border-gray-400 pt-2  ">
        {/* heading  */}
        <h1 className=" text-lg mb-5 ">
          {" "}
          {travellerCategory} ( {travellerNumber} travelers)
        </h1>
        {/* heading */}

        {/* base fare calculation starts  */}
        <div className="baseFaresection flex justify-between pb-2   ">
          {/* base fare left starts  */}
          <div className="baseFareLeft">
            <h1 className="  ">Base Fare</h1>
          </div>
          {/* base fare left ends  */}

          {/* base fare right starts */}
          <div className="baseFareEnds">
            <h1 className="  ">BDT {baseFare} </h1>
            <h1 className=" text-sm text-end ">
              ( {travellerNumber} x {baseFare} )
            </h1>
          </div>
          {/* base fare right ends  */}
        </div>
        {/* base fare calculation ends  */}

        {/*  */}

        {/* discount calculation starts  */}
        {discount && (
          <div className="baseFaresection flex justify-between pb-2   ">
            {/* base fare left starts  */}
            <div className="baseFareLeft">
              <h1 className="   "> Discount </h1>
            </div>
            {/* base fare left ends  */}

            {/* base fare right starts */}
            <div className="baseFareEnds mt-1.5  ">
              <h1 className="  ">
                BDT <span className=" font-semibold "> {discount} </span>{" "}
              </h1>
            </div>
            {/* base fare right ends  */}
          </div>
        )}

        {/* discount  calculation ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default FeeCalculation;
