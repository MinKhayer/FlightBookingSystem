import Banner from "../Components/Home/Banner";
import HomeAdd from "../Components/Home/HomeAdd";
import { UseAuth } from "../Context/AuthContext";

const Home = () => {
  const { user } = UseAuth();

  return (
    <div className="homeContainer   ">
      {/* banner starts  */}

      <div className="bannerContainer">
        <Banner />
      </div>

      {/* banner ends  */}

      <div className="adContainer">
        <HomeAdd />
      </div>

      {/*  */}
    </div>
  );
};

export default Home;
