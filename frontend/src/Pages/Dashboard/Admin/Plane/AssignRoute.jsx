import { useForm } from "react-hook-form";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetAllRoute from "../../../../Hooks/Route/GetAllRoute";
import { routeAssignSuccessfully } from "../../../../Utils/ToastFunctions";
import { useParams } from "react-router-dom";

const AssignRoute = () => {
  const { id } = useParams();
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const { allRoutesData, allRoutesLoading, allRoutesRefetch } = GetAllRoute();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // ! function for assigning route to airplane
  const handleAssignRoute = (data) => {
    const routeName = data?.routeName;
    const economyFare = data?.economyFare;
    const businessFare = data?.businessFare;
    const firstCLassFare = data?.firstCLassFare;
    const childDIscount = data?.childDIscount;

    const assignRouteData = {
      route: routeName,
      economyFare,
      businessFare,
      firstClassFare: firstCLassFare,
      childDiscount: childDIscount,
    };

    axiosPrivateUrl
      .post(`/api/airplane/${id}/assign`, assignRouteData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data) {
          routeAssignSuccessfully();
          reset();
        }
      })
      .catch((error) => {
        console.log("error in assign route ");
        console.log(error);
      });
  };

  return (
    <div className="AssignRouteContainer py-8  ">
      <ToastContainer />
      <div className="AssignRouteWrapper  flex justify-center items-center  ">
        {/* assign card starts  */}
        <div className="assignRouteCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300  ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10 ">
            Assign Route
          </h1>

          <form
            onSubmit={handleSubmit(handleAssignRoute)}
            className=" w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/* Route input starts  */}
            <div className="routeName  flex flex-col gap-1 ">
              <label htmlFor="routeName">Route : </label>
              <select
                id="routeName"
                {...register("routeName", {
                  required: "Route is required",
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="">Select route</option>
                {allRoutesData &&
                  allRoutesData?.map((route) => (
                    <option key={route?._id} value={route?._id}>
                      {route?.name}
                    </option>
                  ))}
              </select>
              {errors?.routeName && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.routeName?.message}
                </p>
              )}
            </div>
            {/* Route input ends  */}

            {/* economy fare input starts  */}
            <div className="economyFare  flex flex-col gap-1">
              <label htmlFor="economyFare">Economy Fare:</label>
              <input
                type="number"
                id="economyFare"
                {...register("economyFare", {
                  required: "Economy Fare is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.economyFare && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.economyFare?.message}
                </p>
              )}
            </div>
            {/* economy fare input ends  */}

            {/* business fare input starts  */}
            <div className="businessFare  flex flex-col gap-1">
              <label htmlFor="businessFare">Business Fare:</label>
              <input
                type="number"
                id="businessFare"
                {...register("businessFare", {
                  required: "Business Fare is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.businessFare && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.businessFare?.message}
                </p>
              )}
            </div>

            {/* business fare input ends  */}

            {/* first class fare starts  */}
            <div className="firstCLassFare  flex flex-col gap-1">
              <label htmlFor="firstCLassFare">First class Fare:</label>
              <input
                type="number"
                id="firstCLassFare"
                {...register("firstCLassFare", {
                  required: "First class Fare is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.firstCLassFare && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.firstCLassFare?.message}
                </p>
              )}
            </div>
            {/* first class fare ends   */}

            {/* chgild discount starts  */}
            <div className="childDIscount  flex flex-col gap-1">
              <label htmlFor="childDIscount">Child discount:</label>
              <input
                type="number"
                id="childDIscount"
                {...register("childDIscount", {
                  required: "Child discount is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.childDIscount && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.childDIscount?.message}
                </p>
              )}
            </div>
            {/* chgild discount ends  */}

            {/*  */}
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
                "Assign Route  "
              )}
            </button>
          </form>
        </div>
        {/* assign card ends */}
      </div>
    </div>
  );
};

export default AssignRoute;
