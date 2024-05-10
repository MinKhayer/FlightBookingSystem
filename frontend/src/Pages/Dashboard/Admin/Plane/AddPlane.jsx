import { useForm } from "react-hook-form";
import GetAllAIrline from "../../../../Hooks/Airline/GetAllAIrline";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import { airplaneCreatedSuccessfully } from "../../../../Utils/ToastFunctions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPlane = () => {
  const { allAirlineData, allAirlineLoading, allAirlineRefetch } =
    GetAllAIrline();
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // ! function for creating a airplane
  const handleAddAirplane = (data) => {
    const airplaneName = data?.airplaneName;
    const airlineName = data?.airlineName;
    const airplaneModel = data?.airplaneModel;
    const airplaneSerial = data?.airplaneSerial;
    const economyCapacity = data?.economyCapacity;
    const businessCapacity = data?.businessCapacity;
    const firstclassCapacity = data?.firstclassCapacity;

    const airplaneData = {
      name: airplaneName,
      airline: airlineName,
      model: airplaneModel,
      serial: airplaneSerial,
      economySeats: economyCapacity,
      businessSeats: economyCapacity,
      firstClassSeats: economyCapacity,
    };

    console.log(airplaneData);

    axiosPrivateUrl
      .post("/api/airplane", airplaneData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data) {
          airplaneCreatedSuccessfully();
          reset();
        }
      })
      .catch((error) => {
        console.log("error in create airplane ");
        console.log(error);
      });
  };

  return (
    <div className="AddPlaneContainer py-8 ">
      <ToastContainer />
      <div className="AddPlaneWrappper flex justify-center items-center ">
        {/* add plane card starts  */}
        <div className="addPLaneCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300 ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10 ">
            Add Airplane
          </h1>

          <form
            onSubmit={handleSubmit(handleAddAirplane)}
            className=" w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/*airplane name input starts */}
            <div className="flex flex-col gap-1 airplaneName">
              <label htmlFor="airplaneName">Airplane name</label>
              <input
                type="text"
                id="airplaneName"
                {...register("airplaneName", {
                  required: "Airplane name is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.airplaneName && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.airplaneName?.message}
                </p>
              )}
            </div>
            {/*airplane name input ends */}

            {/* airline name input strts  */}
            <div className="airlineName  flex flex-col gap-1 ">
              <label htmlFor="airlineName">Airline name : </label>
              <select
                id="airlineName"
                {...register("airlineName", {
                  required: "airline name  is required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="">Select airline</option>
                {allAirlineData &&
                  allAirlineData?.map((airline) => (
                    <option key={airline?._id} value={airline?._id}>
                      {airline?.name}{" "}
                    </option>
                  ))}
              </select>
              {errors?.airlineName && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.airlineName?.message}
                </p>
              )}
            </div>
            {/* airline name input ends  */}

            {/* airplane model name starts  */}
            <div className="airplaneModel  flex flex-col gap-1">
              <label htmlFor="airplaneModel">Airplane Model</label>
              <input
                type="text"
                id="airplaneModel"
                {...register("airplaneModel", {
                  required: "Airplane Model is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.airplaneModel && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.airplaneModel?.message}
                </p>
              )}
            </div>
            {/* airplane model name ends  */}

            {/* airplane serial number starts  */}
            <div className="airplaneSerial flex flex-col gap-1 ">
              <label htmlFor="airplaneSerial">Airplane Serial no : </label>
              <input
                type="number"
                id="airplaneSerial"
                {...register("airplaneSerial", {
                  required: "Airplane Serial is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.airplaneSerial && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.airplaneSerial?.message}
                </p>
              )}
            </div>
            {/* airplane serial number ends  */}

            {/* economy capacity starts */}
            <div className="economyCapacity flex flex-col gap-1 ">
              <label htmlFor="economyCapacity">Economy seat Capacity : </label>
              <input
                type="number"
                id="economyCapacity"
                {...register("economyCapacity", {
                  required: "Airplane Economy Capacity is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter Economy capacity "
              />

              {errors?.economyCapacity && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.economyCapacity?.message}
                </p>
              )}
            </div>
            {/* economy capacity ends  */}

            {/* business capacity starts  */}
            <div className="businessCapacity flex flex-col gap-1 ">
              <label htmlFor="businessCapacity">
                Business seat Capacity :{" "}
              </label>
              <input
                type="number"
                id="businessCapacity"
                {...register("businessCapacity", {
                  required: "Airplane Business Capacity is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter Business capacity "
              />

              {errors?.businessCapacity && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.businessCapacity?.message}
                </p>
              )}
            </div>
            {/* business capacity ends  */}

            {/* first class capacity starts  */}
            <div className="firstclassCapacity flex flex-col gap-1 ">
              <label htmlFor="firstclassCapacity">
                Firstclass seat Capacity :{" "}
              </label>
              <input
                type="number"
                id="firstclassCapacity"
                {...register("firstclassCapacity", {
                  required: "Airplane Firstclass Capacity is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter Firstclass capacity "
              />

              {errors?.firstclassCapacity && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.firstclassCapacity?.message}
                </p>
              )}
            </div>
            {/* first class capacity ends  */}

            <button
              disabled={isSubmitting}
              className="flex items-center justify-center w-full py-2 text-lg font-medium rounded  bg-sky-500 hover:bg-sky-600 text-gray-50"
            >
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Add Airplane "
              )}
            </button>
          </form>
        </div>
        {/* add plane card ends  */}
      </div>
    </div>
  );
};

export default AddPlane;
