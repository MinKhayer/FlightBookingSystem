import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetDestinations from "../../../../Hooks/GetDestinations";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import { destinationDeletedSuccessfully } from "../../../../Utils/ToastFunctions";

const DestinationList = () => {
  const { destinationsData, destinationsDataLoading, destinationsDataRefetch } =
    GetDestinations();

  const { axiosPrivateUrl } = UseAxiosPrivate();

  //! function for deleting a destination
  const handleDeleteDestination = (id) => {
    console.log("delete ");
    console.log(id);
    axiosPrivateUrl
      .delete(`/api/destination/${id}`)
      .then((response) => {
        console.log(response?.data);

        if (response?.data) {
          destinationDeletedSuccessfully();
          destinationsDataRefetch();
        }
      })
      .catch((error) => {
        console.log("error in delete route ");
        console.log(error);
      });
  };

  // console.log(destinationsData);

  return (
    <div className="DestinationListContainer">
      <ToastContainer />
      <div className="DestinationListWrapper h-screen flex justify-center items-center">
        {/* destinationn list card starts  */}
        <div className="destinationlistCard bg-gray-50  shadow-2xl  py-9 px-4 w-[99%] xsm:w-[96%] sm:w-[92%] md:w-[90%] xmd:w-[86%] lg:w-[80%] rounded-md border border-gray-300">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            All Destinations
          </h1>

          {/* destination list starts  */}
          <div className="listContainer   ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-600 border border-gray-300 shadow-lg ">
                <thead className="text-xs text-gray-900 uppercase bg-gray-200 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Airport Name
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
                  {destinationsData &&
                    destinationsData?.map((destination, ind) => (
                      <tr
                        key={destination?._id}
                        className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4">{destination?.name}</td>
                        <td className="px-6 py-4">{destination?.airport}</td>
                        <td className="px-6 py-4  ">
                          <Link
                            to={`/dashboard/admin/updateDestination/${destination?._id}`}
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
                            onClick={() =>
                              handleDeleteDestination(destination?._id)
                            }
                          >
                            <MdDelete />
                            <p>Delete</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">Dhaka</td>
                    <td className="px-6 py-4">
                      Hazrat Shahjalal International Airport
                    </td>
                    <td className="px-6 py-4  ">
                      <Link to={`/dashboard/admin/updateDestination/:id`}>
                        <div className="text-green-600 font-bold cursor-pointer flex justify-start items-center gap-x-1 ">
                          <GrUpdate />
                          <p>Update</p>
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-red-600 font-bold cursor-pointer flex justify-start items-center gap-x-1 ">
                        <MdDelete />
                        <p>Delete</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* destination list ends  */}
        </div>
        {/* destinationn list card ends  */}
      </div>
    </div>
  );
};

export default DestinationList;
