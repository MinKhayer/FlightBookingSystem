import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetAllRoute from "../../../../Hooks/Route/GetAllRoute";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import { routeDeletedSuccessfully } from "../../../../Utils/ToastFunctions";

const RoutesList = () => {
  const { allRoutesData, allRoutesLoading, allRoutesRefetch } = GetAllRoute();
  const { axiosPrivateUrl } = UseAxiosPrivate();

  console.log(allRoutesData);

  //!  function for deleting route
  const handleDeleteRoute = (id) => {
    axiosPrivateUrl
      .delete(`/api/route/${id}`)
      .then((response) => {
        console.log(response?.data);

        if (response?.data) {
          routeDeletedSuccessfully();
          allRoutesRefetch();
        }
      })
      .catch((error) => {
        console.log("error in delete route ");
        console.log(error);
      });
  };

  return (
    <div className="RoutesListContainer">
      <ToastContainer />
      <div className="RoutesListWrapper h-screen flex justify-center items-center ">
        {/* route list card starts  */}
        <div className="routeListCard bg-gray-50  shadow-2xl  py-9 px-4 w-[99%] xsm:w-[96%] sm:w-[92%] md:w-[90%] xmd:w-[86%] lg:w-[80%] rounded-md border border-gray-300">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            All Routes
          </h1>

          {/* route list starts  */}
          <div className="listContainer   ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-600 border border-gray-300 shadow-lg ">
                <thead className="text-xs text-gray-900 uppercase bg-gray-200 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      From (city)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      To (city)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Departure Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Arrival Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Departure Day
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Update
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allRoutesData &&
                    allRoutesData?.map((route) => (
                      <tr
                        key={route._id}
                        className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">
                          {route?.name.split(" to ")[0]}
                        </td>
                        <td className="px-6 py-4">
                          {" "}
                          {route?.name.split(" to ")[1]}{" "}
                        </td>
                        <td className="px-6 py-4"> {route?.departure} </td>
                        <td className="px-6 py-4"> {route?.arrival} </td>
                        <td className="px-6 py-4"> {route?.day} </td>
                        <td className="px-6 py-4  ">
                          <Link
                            to={`/dashboard/admin/updateRoute/${route?._id}`}
                          >
                            <div className="text-green-600 font-bold cursor-pointer flex justify-start items-center gap-x-1 ">
                              <GrUpdate />
                              <p>Update</p>
                            </div>
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <div
                            className="text-red-600 font-bold cursor-pointer flex justify-start items-center gap-x-1 "
                            onClick={() => handleDeleteRoute(route?._id)}
                          >
                            <MdDelete />
                            <p>Delete</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* route list ends  */}
        </div>
        {/* route list card ends  */}
      </div>
    </div>
  );
};

export default RoutesList;
