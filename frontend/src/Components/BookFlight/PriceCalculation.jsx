import FeeCalculation from "./FeeCalculation";

const PriceCalculation = ({ flightData }) => {
  // const uid = UseAuth();

  // console.log(uid);

  const { fareCategory, fareTypes, basePrice, tax, travelers } = flightData;

  // for calculatingBase fare
  const baseFare = fareTypes[fareCategory];

  //!  calculating base fare for adults
  const totalAdultFare = fareTypes[fareCategory] * travelers?.adult;

  const totalChildFare = fareTypes[fareCategory] * travelers?.children;

  const childDiscount =
    fareTypes[fareCategory] -
    fareTypes[fareCategory] *
      (1 - fareTypes?.childDiscount / 100) *
      travelers?.children;

  const totalTraverller = travelers?.adult + travelers?.children;

  // console.log(fareTypes?.childDiscount);
  return (
    <div className="PriceCalculationContainer sticky top-2">
      <div className="PriceCalculationWrapper bg-gray-50 shadow-md border border-gray-200 py-4 px-3 rounded-md ">
        {/* plane name starts  */}
        <div className="planeName flex items-center gap-x-3 pb-2 border-b border-gray-300 ">
          <div className="logoCOntainer h-10 w-10  ">
            <img
              // src="https://i.ibb.co/b1CJwCN/biman-logo.jpg"
              src={flightData?.airline?.logo}
              className=" w-full h-full "
              alt=""
            />
          </div>
          <h1 className=" planeNAme font-medium text-gray-700 text-xl ">
            {flightData?.airline?.name}
          </h1>
        </div>
        {/* plane name ends */}

        {/* fare caculation section startss  */}
        <div className="fareCalculation  pt-3 ">
          {/* heading starts  */}
          <h1 className=" text-lg font-semibold mb-4 "> Fare Summary</h1>
          {/* heading ends  */}

          {/* fee calculation section starts  */}
          <div className="feeCalculation ">
            {/* fare calculation for adult starts  */}

            {travelers?.adult > 0 && (
              <FeeCalculation
                travellerCategory="Adult"
                travellerNumber={travelers?.adult}
                baseFare={baseFare}
                totalFare={totalAdultFare}
              />
            )}
            {/* fare calculation for adult ends  */}

            {/* farre calculation for child starts  */}

            {travelers?.children > 0 && (
              <FeeCalculation
                travellerCategory="Children"
                travellerNumber={travelers?.children}
                baseFare={baseFare}
                discount={childDiscount}
                totalFare={totalChildFare}
              />
            )}
            {/* farre calculation for child ends  */}
          </div>
          {/* fee calculation section ends */}

          {/* sub total calculation starts  */}
          <div className="subTotal flex justify-between items-center pt-2 ">
            <h1>
              Sub-total
              <span className=" text-xs ">
                {" "}
                ( {totalTraverller} traveller ){" "}
              </span>
            </h1>
            <h1 className=" text-lg font-semibold ">
              BDT {basePrice + tax}{" "}
              <span className=" text-xs "> (inc. tax) </span>
            </h1>
          </div>
          {/* sub total calculation ends  */}

          {/*  */}
        </div>
        {/* fare caculation section ends  */}
      </div>
    </div>
  );
};

export default PriceCalculation;
