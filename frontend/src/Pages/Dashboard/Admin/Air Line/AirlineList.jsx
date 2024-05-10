import React from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import GetAllAIrline from "../../../../Hooks/Airline/GetAllAIrline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import { airlineDeletedSuccessfully } from "../../../../Utils/ToastFunctions";

const AirlineList = () => {
  const { allAirlineData, allAirlineLoading, allAirlineRefetch } =
    GetAllAIrline();

  const { axiosPrivateUrl } = UseAxiosPrivate();

  //! function for deleting a destination
  const handleDeleteAirline = (id) => {
    axiosPrivateUrl
      .delete(`/api/airline/${id}`)
      .then((response) => {
        console.log(response?.data);

        if (response?.data) {
          airlineDeletedSuccessfully();
          allAirlineRefetch();
        }
      })
      .catch((error) => {
        console.log("error in delete route ");
        console.log(error);
      });
  };

  // console.log(allAirlineData);

  return (
    <div className="AirlineListContainer py-8  ">
      <ToastContainer />
      <div className="AirlineListWrapper  flex justify-center items-center ">
        {/* airline list card starts  */}
        <div className="airlineListCard bg-gray-50  shadow-2xl  py-9 px-4 w-[99%] xsm:w-[96%] sm:w-[92%] md:w-[90%] xmd:w-[86%] lg:w-[80%] rounded-md border border-gray-300 ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            All Airlines
          </h1>

          {/* airline list  starts  */}
          <div className="listContainer   ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg  ">
              <table className="w-full text-sm text-left rtl:text-right text-gray-600 border border-gray-300 shadow-lg ">
                <thead className="text-xs text-gray-900 uppercase bg-gray-200 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Airline Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Airline Logo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Airline Code
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
                  {allAirlineData &&
                    allAirlineData?.map((airline) => (
                      <tr
                        key={airline?._id}
                        className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4"> {airline?.name} </td>
                        <td className="px-6 py-4">
                          <img
                            src={airline?.logo}
                            className=" w-8 h-8  "
                            alt=""
                          />
                        </td>
                        <td className="px-6 py-4"> {airline?.code} </td>
                        <td className="px-6 py-4  ">
                          <Link
                            to={`/dashboard/admin/updateAirline/${airline?._id}  `}
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
                            onClick={() => handleDeleteAirline(airline?._id)}
                          >
                            <MdDelete />
                            <p>Delete</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">Biman Bd</td>
                    <td className="px-6 py-4">
                      <img
                        src="https://i.ibb.co/d0p4wQy/biman-logo.jpg"
                        className=" w-8 h-8  "
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">Bg</td>
                    <td className="px-6 py-4  ">
                      <Link to={`/dashboard/admin/updateAirline/:id`}>
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
          {/* airline list  ends  */}
        </div>
        {/* airline list card ends  */}
      </div>
    </div>
  );
};

export default AirlineList;
