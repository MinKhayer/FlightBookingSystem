const HomeAdd = () => {
  return (
    <div className="homeAddContainer     ">
      <div className="homeAddWrapper   m-auto  ">
        {/* heading starts  */}
        <h1 className=" w-[90%] m-auto text-4xl font-semibold border-l-4 border-red-600 px-2  my-12   ">
          Explore unique places to stay
        </h1>
        {/* heading ends  */}

        {/* paragraph section starts  */}
        <div className="paraContainer   bg-[#FF2540]   ">
          <div className="paraWraper text-gray-50 w-[90%] m-auto bgImage bg-[url('https://i.ibb.co/ccjHPwW/explore-ezgif-com-webp-to-jpg-converter.jpg')] py-[7.1rem] ">
            {/* heading  starts  */}
            <h1 className=" text-4xl font-medium mb-4 ">
              {" "}
              Seamless travel made easy
            </h1>
            {/* heading  ends  */}

            {/* paragraph starts  */}
            <p className=" w-[40%] ">
              Book and manage flights on the go. Jet off on app-exclusive fares.
              Enjoy unlimited access to digital content. Travel seamlessly with
              the flight expert.
            </p>
            {/* paragraph ends  */}
          </div>
        </div>
        {/* paragraph section ends  */}
      </div>
    </div>
  );
};

export default HomeAdd;
