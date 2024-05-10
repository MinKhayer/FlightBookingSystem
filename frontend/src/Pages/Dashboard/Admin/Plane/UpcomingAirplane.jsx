import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import GetUpcomingPlaneList from "../../../../Hooks/UpcomingPlane/GetUpcomingPlaneList";

import { RxCross2 } from "react-icons/rx";
import { UseStateContext } from "../../../../Context/StateContext";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";

// airpolane detail modal starts

const AirplaneDetailModal = ({ setDetailModal }) => {
  const { upcomingPlaneDetail } = UseStateContext();

  console.log(upcomingPlaneDetail);
  
  const { axiosPrivateUrl } = UseAxiosPrivate();
  // console.log(upcomingPlaneDetail);
  // console.log(new Date(upcomingPlaneDetail[0]?.date));

  //! fnction for  download schedule
  const handleDownloadSchedule = (planeId, routeId, date) => {
    console.log("download ");

    axiosPrivateUrl
      .get(`api/airplane/upcoming/${planeId}/${routeId}/${date}`)
      .then((response) => {
        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="airlineDetailPage bg-gray-100  rounded-md shadow-lg relative  ">
      <div className="airlineDetailPPAgeWrapper  py-6 px-10  ">
        {/* table starts  */}

        <table className="routeDetailTable  w-full text-xs text-left rtl:text-right text-gray-600 border border-gray-300 shadow-lg ">
          {/* table head starts  */}
          <thead className="text-xs text-gray-900 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Route
              </th>

              <th scope="col" className="px-6 py-3">
                Departure time
              </th>
              <th scope="col" className="px-6 py-3">
                Arrival time
              </th>

              <th scope="col" className="px-6 py-3">
                Economy ticket
              </th>
              <th scope="col" className="px-6 py-3">
                Available Economy ticket
              </th>

              <th scope="col" className="px-6 py-3">
                Business ticket
              </th>
              <th scope="col" className="px-6 py-3">
                Available Business ticket
              </th>

              <th scope="col" className="px-6 py-3">
                Firstclass ticket
              </th>
              <th scope="col" className="px-6 py-3">
                Available Firstclass ticket
              </th>
              <th scope="col" className="px-6 py-3">
                Download schedule
              </th>
            </tr>
          </thead>
          {/* table head ends  */}

          {/* table body starts  */}

          <tbody>
            {upcomingPlaneDetail.length > 0 &&
              upcomingPlaneDetail?.map((airplane) => (
                <tr
                  key={airplane.airplane._id}
                  className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4"> {airplane?.route?.name} </td>

                  <td className="px-6 py-4"> {airplane?.route?.departure} </td>
                  <td className="px-6 py-4"> {airplane?.route?.arrival} </td>

                  <td className="px-6 py-4">
                    {airplane?.airplane?.economySeats}{" "}
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    {airplane?.airplane?.bookedEconomySeats}{" "}
                  </td>

                  <td className="px-6 py-4">
                    {airplane?.airplane?.businessSeats}{" "}
                  </td>
                  <td className="px-6 py-4">
                    {airplane?.airplane?.bookedBusinessSeats}{" "}
                  </td>

                  <td className="px-6 py-4">
                    {airplane?.airplane?.firstClassSeats}{" "}
                  </td>
                  <td className="px-6 py-4">
                    {airplane?.airplane?.bookedFirstClassSeats}{" "}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-semibold cursor-pointer  ">
                    <a
                      href={`http://localhost:4003/api/airplane/upcoming/${airplane?.airplane?._id}/${airplane?.route?._id}/${airplane?.date}`}
                    >
                      Download
                    </a>
                  </td>
                  {/* <td
                    scope="col"
                    className="px-6 py-3 text-green-600 font-semibold cursor-pointer  "
                    onClick={() =>
                      handleDownloadSchedule(
                        airplane?.airplane?._id,
                        airplane?.route?._id,
                        airplane?.date
                      )
                    }
                  >
                    Download
                  </td> */}
                </tr>
              ))}
          </tbody>

          {/* table body ends  */}
        </table>

        {/* table ends  */}
      </div>

      {/* close icon starts  */}
      <div className="crossIcon absolute top-0 right-0 text-2xl font-bold text-red-700 cursor-pointer    ">
        <RxCross2 onClick={() => setDetailModal(false)} />
      </div>
      {/* close icon ends  */}
    </div>
  );
};
// airpolane detail modal ends

const UpcomingAirplane = () => {
  const [detailModal, setDetailModal] = useState(false);
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const { upcomingPlaneDetail, setUpcomingPlaneDetail } = UseStateContext();

  const {
    upcomingPlaneData,
    upcomingPlaneDataLoading,
    upcomingPlaneDataRefetch,
  } = GetUpcomingPlaneList();

  //! function for plane detail
  const handleDetailModal = (id) => {
    console.log("detail click !!!");

    console.log("id in detail = ", id);

    axiosPrivateUrl
      .get(`/api/airplane/upcoming/${id}`)
      .then((response) => {
        setUpcomingPlaneDetail(response.data);
        setDetailModal(!detailModal);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(upcomingPlaneData);

  return (
    <div className="upcomingAirplaneListContainer py-8 relative   ">
      <div
        className={`  ${
          detailModal ? "blur" : "  "
        } upcomingplaneListWrapper flex justify-center items-center    `}
      >
        {/* plane list card starts  */}
        <div className="planeListCard  bg-gray-50  shadow-2xl  py-9 px-4 w-[99%] xsm:w-[96%] sm:w-[92%] md:w-[90%] xmd:w-[86%] lg:w-[80%] rounded-md border border-gray-300  ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Upcoming Airplanes
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
                      Airline Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Airline Logo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Detail
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {upcomingPlaneData &&
                    upcomingPlaneData?.map((airplane) => (
                      <tr
                        key={airplane?._id}
                        className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="px-6 py-4"> {airplane?.name} </td>

                        <td className="px-6 py-4"> {airplane?.model} </td>
                        <td className="px-6 py-4">{airplane?.airline?.name}</td>

                        <td className="px-6 py-4">
                          <img
                            src={airplane?.airline?.logo}
                            className=" w-8 h-8  "
                            alt=""
                          />
                        </td>

                        <td
                          className="px-6 py-4 cursor-pointer font-semibold text-green-600  "
                          onClick={() => handleDetailModal(airplane?._id)}
                        >
                          Detail
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

      {/* airpllane detail modal starts  */}
      {detailModal && (
        <div className="airplaneDetailModal absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
          <AirplaneDetailModal setDetailModal={setDetailModal} />
        </div>
      )}

      {/* airpllane detail modal ends */}
    </div>
  );
};

export default UpcomingAirplane;
