import React from "react";

const RounddTripPriceCalculation = ({ flightData }) => {
  console.log(flightData);

  const { fareCategory, fareTypes, basePrice, tax, travelers } = flightData;

  // console.log(fareTypes);
  // for calculatingBase fare
  // const baseFare = fareTypes[fareCategory];

  //!  calculating base fare for adults
  // const totalAdultFare = fareTypes[fareCategory] * travelers?.adult;

  // const totalChildFare = fareTypes[fareCategory] * travelers?.children;

  // const childDiscount =
  //   fareTypes[fareCategory] -
  //   fareTypes[fareCategory] *
  //     (1 - fareTypes?.childDiscount / 100) *
  //     travelers?.children;

  // const totalTraverller = travelers?.adult + travelers?.children;

  return (
    <div>
      <h1>RounddTripPriceCalculation</h1>
      <h1>RounddTripPriceCalculation</h1>
      <h1>RounddTripPriceCalculation</h1>
      <h1>RounddTripPriceCalculation</h1>
      <h1>RounddTripPriceCalculation</h1>
      <h1>RounddTripPriceCalculation</h1>
      <h1>RounddTripPriceCalculation</h1>
    </div>
  );
};

export default RounddTripPriceCalculation;
