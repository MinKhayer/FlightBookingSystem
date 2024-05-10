import { Link } from "react-router-dom";

const ManagePlane = () => {
  return (
    <div className="ManagePlaneContainer">
      <div className="ManagePlaneWrappper h-screen flex flex-col justify-center items-center gap-y-8">
        {/* create plane button starts  */}
        <div className="addRoute">
          <Link to={"/dashboard/admin/addAirPlane"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Add Airplanes
            </button>
          </Link>
        </div>
        {/* create plane button ends  */}

        {/* plane list button starts  */}
        <div className="routeList">
          <Link to={"/dashboard/admin/AirPlanes"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200 ">
              All Airplanes
            </button>
          </Link>
        </div>
        {/* plane list button endss  */}
      </div>
    </div>
  );
};

export default ManagePlane;
