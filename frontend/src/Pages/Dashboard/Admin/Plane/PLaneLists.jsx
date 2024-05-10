import { GrUpdate } from "react-icons/gr";

import { MdDelete, MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { Link } from "react-router-dom";
import GetAllAirplane from "../../../../Hooks/Airplane/GetAllAirplane";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import { airplaneDeletedSuccessfully } from "../../../../Utils/ToastFunctions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PLaneLists = () => {
  const { allAirplaneData, allAirplaneLoading, allAirplaneRefetch } =
    GetAllAirplane();
  const { axiosPrivateUrl } = UseAxiosPrivate();

  //!  function for deleting plane
  const handleDeleteAirplane = (id) => {
    axiosPrivateUrl
      .delete(`/api/airplane/${id}`)
      .then((response) => {
        console.log(response?.data);

        if (response?.data) {
          airplaneDeletedSuccessfully();
          allAirplaneRefetch();
        }
      })
      .catch((error) => {
        console.log("error in delete route ");
        console.log(error);
      });
  };

  return (
    <div className="PLaneListsContainer py-8 ">
      <ToastContainer />
      <div className="PLaneListsWrapper   flex justify-center items-center ">
        {/* plane list card starts  */}
        <div className="planeListCard bg-gray-50  shadow-2xl  py-9 px-4 w-[99%] xsm:w-[96%] sm:w-[92%] md:w-[90%] xmd:w-[86%] lg:w-[80%] rounded-md border border-gray-300  ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            All Airplanes
          </h1>
          {/* airplane list starts  */}
          <div className="listContainer   ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-600 border border-gray-300 shadow-lg ">
                <thead className="text-xs text-gray-900 uppercase bg-gray-200 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Airplane Name
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Model
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Serial
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Capacityy
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Assign route
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
                  {allAirplaneData &&
                    allAirplaneData?.map((airplane) => (
                      <tr
                        key={airplane?._id}
                        className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4"> {airplane?.name} </td>

                        <td className="px-6 py-4"> {airplane?.model} </td>
                        <td className="px-6 py-4">{airplane?.serial} </td>
                        <td className="px-6 py-4">
                          {airplane?.maximumCapacity}
                        </td>
                        <td className="px-6 py-4  ">
                          <Link
                            to={`/dashboard/admin/assignRoute/${airplane?._id}`}
                          >
                            <div className="  text-blue-700 font-bold cursor-pointer flex justify-start items-center gap-x-1 ">
                              <MdOutlineAssignmentTurnedIn />
                              <p>Assign Route</p>
                            </div>
                          </Link>
                        </td>
                        <td className="px-6 py-4  ">
                          <Link
                            to={`/dashboard/admin/updateAirplane/${airplane?._id}`}
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
                            onClick={() => handleDeleteAirplane(airplane?._id)}
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
          {/* airplane list ends  */}
        </div>
        {/* plane list card ends  */}
      </div>
    </div>
  );
};

export default PLaneLists;
