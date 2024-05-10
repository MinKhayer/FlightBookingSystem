import { Link } from "react-router-dom";
const ManageAirLine = () => {
  return (
    <div className="ManageAirLineContainer">
      <div className="ManageAirLineWrapper h-screen flex flex-col justify-center items-center gap-y-8">
        {/* add airline button starts  */}
        <div className="addAirline">
          <Link to={"/dashboard/admin/addAirline"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200   ">
              Add Air Line
            </button>
          </Link>
        </div>
        {/* add airline button ends  */}

        {/* airline list button starts  */}
        <div className="routeList">
          <Link to={"/dashboard/admin/airlines"}>
            <button className=" bg-green-600 btnClass text-gray-50 font-medium hover:shadow-md hover:bg-green-700 hover:scale-105 active:scale-100  duration-200 ">
              All Air Lines
            </button>
          </Link>
        </div>
        {/* airline list button endss  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ManageAirLine;
