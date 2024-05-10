import { Link } from "react-router-dom";

const ManageRoute = () => {
  return (
    <div className="ManageRouteContainer">
      <div className="ManageRouteWrapper h-screen flex flex-col justify-center items-center gap-y-8  ">
        {/* create route button starts  */}
        <div className="addRoute">
          <Link to={"/dashboard/admin/addRoute"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Add Route
            </button>
          </Link>
        </div>
        {/* create route button ends  */}

        {/* route list button starts  */}
        <div className="routeList">
          <Link to={"/dashboard/admin/routes"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200 ">
              All Routes
            </button>
          </Link>
        </div>
        {/* route list button endss  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ManageRoute;
