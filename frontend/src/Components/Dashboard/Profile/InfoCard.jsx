const InfoCard = ({ info }) => {
  //
  return (
    <div className="InfoCardContainer">
      {/* name input  */}
      <div className="InfoCardWrapper mb-4 bg-gray-50 rounded-lg border border-gray-300 shadow-lg py-6 px-10  ">
        {/* info section starts  */}
        {/* name info starts  */}

        <div className="infoSectionWrapper   flex  justify-between    py-2.5     ">
          {/* info left starts  */}
          <div className="infoLeft w-[50%] text-center   ">
            <h1 className=" font-medium "> User Name : </h1>
          </div>
          {/* info left ends  */}

          {/*  */}

          {/* info right starts  */}
          <div className="infoRight w-[50%] text-center    ">
            <h1> {info?.name} </h1>
          </div>
          {/* info right ends   */}

          {/*  */}
        </div>
        {/* name info ends  */}

        {/* info section ends  */}
      </div>
      {/* name input ends  */}

      {/* phone number starts  */}
      <div className="InfoCardWrapper mb-4 bg-gray-50 rounded-lg border border-gray-300 shadow-lg py-6 px-10  ">
        {/* info section starts  */}

        {/* phone info starts  */}
        <div className="infoSectionWrapper   flex  justify-between    py-2.5     ">
          {/* info left starts  */}
          <div className="infoLeft w-[50%] text-center   ">
            <h1 className=" font-medium "> User Phone number : </h1>
          </div>
          {/* info left ends  */}

          {/*  */}

          {/* info right starts  */}
          <div className="infoRight w-[50%] text-center    ">
            <h1> {info?.phone} </h1>
          </div>
          {/* info right ends   */}

          {/*  */}
        </div>
        {/* phone info ends  */}

        {/* info section ends  */}
      </div>
      {/* phone number ends  */}

      {/* user address starts  */}
      <div className="InfoCardWrapper mb-4 bg-gray-50 rounded-lg border border-gray-300 shadow-lg py-6 px-10  ">
        {/* user address starts  */}
        <div className="infoSectionWrapper   flex  justify-between    py-2.5     ">
          {/* info left starts  */}
          <div className="infoLeft w-[50%] text-center   ">
            <h1 className=" font-medium "> User Address : </h1>
          </div>
          {/* info left ends  */}

          {/*  */}

          {/* info right starts  */}
          <div className="infoRight w-[50%] text-center    ">
            <h1> {info?.address} </h1>
          </div>
          {/* info right ends   */}

          {/*  */}
        </div>
        {/* user address ends  */}
      </div>
      {/* user address ends  */}

      {/* user city starts  */}
      <div className="InfoCardWrapper mb-4 bg-gray-50 rounded-lg border border-gray-300 shadow-lg py-6 px-10  ">
        {/* user address starts  */}
        <div className="infoSectionWrapper   flex  justify-between    py-2.5     ">
          {/* info left starts  */}
          <div className="infoLeft w-[50%] text-center   ">
            <h1 className=" font-medium "> City : </h1>
          </div>
          {/* info left ends  */}

          {/*  */}

          {/* info right starts  */}
          <div className="infoRight w-[50%] text-center    ">
            <h1> {info?.city} </h1>
          </div>
          {/* info right ends   */}

          {/*  */}
        </div>
        {/* user address ends  */}
      </div>
      {/* user city ends  */}

      {/* user state starts  */}
      <div className="InfoCardWrapper mb-4 bg-gray-50 rounded-lg border border-gray-300 shadow-lg py-6 px-10  ">
        {/* user address starts  */}
        <div className="infoSectionWrapper   flex  justify-between    py-2.5     ">
          {/* info left starts  */}
          <div className="infoLeft w-[50%] text-center   ">
            <h1 className=" font-medium "> State : </h1>
          </div>
          {/* info left ends  */}

          {/*  */}

          {/* info right starts  */}
          <div className="infoRight w-[50%] text-center    ">
            <h1> {info?.state} </h1>
          </div>
          {/* info right ends   */}

          {/*  */}
        </div>
        {/* user address ends  */}
      </div>
      {/* user state ends  */}

      {/* user country starts  */}
      <div className="InfoCardWrapper mb-4 bg-gray-50 rounded-lg border border-gray-300 shadow-lg py-6 px-10  ">
        {/* user address starts  */}
        <div className="infoSectionWrapper   flex  justify-between    py-2.5     ">
          {/* info left starts  */}
          <div className="infoLeft w-[50%] text-center   ">
            <h1 className=" font-medium "> Country : </h1>
          </div>
          {/* info left ends  */}

          {/*  */}

          {/* info right starts  */}
          <div className="infoRight w-[50%] text-center    ">
            <h1> {info?.country} </h1>
          </div>
          {/* info right ends   */}

          {/*  */}
        </div>
        {/* user address ends  */}
      </div>
      {/* user country ends  */}

      {/* postcode starts  */}
      <div className="InfoCardWrapper mb-4 bg-gray-50 rounded-lg border border-gray-300 shadow-lg py-6 px-10  ">
        {/* user address starts  */}
        <div className="infoSectionWrapper   flex  justify-between    py-2.5     ">
          {/* info left starts  */}
          <div className="infoLeft w-[50%] text-center   ">
            <h1 className=" font-medium "> Country : </h1>
          </div>
          {/* info left ends  */}

          {/*  */}

          {/* info right starts  */}
          <div className="infoRight w-[50%] text-center    ">
            <h1> {info?.postcode} </h1>
          </div>
          {/* info right ends   */}

          {/*  */}
        </div>
        {/* user address ends  */}
      </div>
      {/* postcode ends  */}
    </div>
  );
};

export default InfoCard;
