import ModifyTravelerNumber from "./ModifyTravelerNumber";

const TravelerNumber = ({
  adultTraveler,
  setAdultTraveler,
  childTraveler,
  setChildTraveler,
  toggleEconomy,
  toggleBusiness,
  toggleFirstCLass,
  economyCheck,
  businessCheck,
  firstClassCheck,
  openTravelModal,
}) => {
  return (
    <div className="TravelerNumberContainer">
      <div className="TravelerNumberWrapper  ">
        {/* traveler select section starts  */}
        <div className="travelerSelect mb-4  ">
          {/* header starts  */}
          <h1 className=" primaryText mb-2  font-semibold ">Travelers</h1>
          {/* header ends  */}

          {/* adult traveler select section starts  */}
          <div className="adultTravelerSection mb-4 ">
            <ModifyTravelerNumber
              travelerGroup="Adult"
              travelerAge="12 years and above"
              traveler={adultTraveler}
              setTraveler={setAdultTraveler}
            />
          </div>
          {/* adult traveler select section ends  */}

          {/* child traveler section starts  */}
          <div className="childTravelerSection">
            <ModifyTravelerNumber
              travelerGroup="Children"
              travelerAge="5 years - under 12 years"
              traveler={childTraveler}
              setTraveler={setChildTraveler}
            />
          </div>
          {/* child traveler section ends  */}

          {/*  */}
        </div>
        {/* traveler select section ends  */}

        <hr />

        {/* booking class section starts  */}
        <div className="bookingClass mt-2 ">
          {/* heading starts  */}
          <h1 className=" primaryText font-semibold mb-3 ">Booking class </h1>
          {/* heading ends  */}

          {/* booking class section starts  */}
          <div className="bookingClass  grid grid-cols-3 gap-x-2  ">
            {/* economy input starts  */}
            <div className="economyClass  flex justify-center items-center gap-x-1   ">
              <input
                id="economy"
                type="checkbox"
                checked={economyCheck}
                onClick={() => toggleEconomy()}
                className="w-3 h-3  border border-gray-300  bg-gray-50   "
              />
              <label
                htmlFor="economy"
                className="text-sm font-medium text-gray-700 "
              >
                Economy
              </label>
            </div>
            {/* economy input ends   */}

            {/* business input starts  */}
            <div className="businessClass  flex justify-center items-center gap-x-1   ">
              <input
                id="business"
                type="checkbox"
                checked={businessCheck}
                onClick={() => toggleBusiness()}
                className="w-3 h-3  border border-gray-300  bg-gray-50   "
              />
              <label
                htmlFor="business"
                className="text-sm font-medium text-gray-700 "
              >
                Business
              </label>
            </div>
            {/* business input ends s */}

            {/* first class input starts  */}
            <div className="firstClass  flex justify-center items-center gap-x-1   ">
              <input
                id="firstclass"
                type="checkbox"
                checked={firstClassCheck}
                onClick={() => toggleFirstCLass()}
                className="w-3 h-3  border border-gray-300  bg-gray-50   "
              />
              <label
                htmlFor="firstclass"
                className="text-sm font-medium text-gray-700 "
              >
                First class
              </label>
            </div>
            {/* first class input ends s */}

            {/*  */}
          </div>
          {/* booking class section ends  */}
        </div>
        {/* booking class section ends  */}

        {/* submit button starts  */}
        <div className="submitBtn mt-3  flex justify-end  ">
          <button
            className=" primaryText font-medium py-1 px-4 rounded-md border border-red-600  hover:bg-red-600 hover:text-gray-50 active:scale-95 hover:shadow-md  "
            onClick={() => openTravelModal()}
          >
            Done
          </button>
        </div>
        {/* submit button ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default TravelerNumber;
