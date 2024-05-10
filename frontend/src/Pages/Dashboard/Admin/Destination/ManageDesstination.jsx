import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const ManageDesstination = () => {
  return (
    <div className="ManageDesstinationContainer">
      <div className="ManageDesstinationWrapper h-screen flex flex-col justify-center items-center gap-y-8 ">
        {/* create destination button starts  */}
        <div className="addRoute">
          <Link to={"/dashboard/admin/addDestination"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Add Destination
            </button>
          </Link>
        </div>
        {/* create destination button ends  */}

        {/* destination list button starts  */}
        <div className="routeList">
          <Link to={"/dashboard/admin/destinations"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200 ">
              All Destinations
            </button>
          </Link>
        </div>
        {/* destination list button endss  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ManageDesstination;
