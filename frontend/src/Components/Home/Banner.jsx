import FlightSearch from "../Shared/FlightSearch";

const Banner = () => {
  //
  return (
    <div className="bannerContainer   ">
      <div className="bannerWrapper py-8  bgImage bg-[url('https://i.ibb.co/1XWtNcK/banner.jpg')] ">
        {/* heading starts  */}
        <h1 className=" py-8  w-[75%] xsm:w-[61%] sm:w-[67%] md:w-[75%] xmd:w-[62%] lg:w-[48%] m-auto text-center  font-bold  text-3xl xsm:text-4xl sm:text-5xl md:text-6xl ">
          It’s more than just a trip
        </h1>
        {/* heading ends  */}

        {/* flight book form starts  */}
        <FlightSearch />
        {/* flight book form ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Banner;
