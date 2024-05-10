import axios from "axios";
import { useForm } from "react-hook-form";
import UseAxiosPrivate from "../../../../Hooks/UseAxiosPrivate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { airlineCreatedSuccessfully } from "../../../../Utils/ToastFunctions";

const AddAirline = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  // !  function for creating airline
  const handleAddAirline = async (data) => {
    console.log("add airline ");

    const airlineName = data?.airlineName;
    const airlineCode = data?.airlineCode;
    const airlineLogoImg = data?.file_input[0];

    const formData = new FormData();
    formData.append("image", airlineLogoImg);

    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314",
      formData
    );

    const imageUrl = imageResponse?.data?.data?.display_url;

    const airlineData = {
      name: airlineName,
      logo: imageUrl,
      code: airlineCode,
    };

    axiosPrivateUrl
      .post("/api/airline", airlineData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data) {
          airlineCreatedSuccessfully();
          reset();
        }
      })
      .catch((error) => {
        console.log("error in add airline ");
        console.log(error);
      });

    console.log(airlineData);
  };

  return (
    <div className="AddAirlineContainer">
      <ToastContainer />
      <div className="AddAirlineWrapper  h-screen   flex justify-center items-center ">
        {/* add airline card starts  */}
        <div className="addAirlineCard bg-white  shadow-2xl  py-9 px-4 w-[94%] xsm:w-[90%] sm:w-[88%] md:w-[86%] xmd:w-[78%] lg:w-[70%] rounded-md border border-gray-300  ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10">
            Add Airline
          </h1>

          <form
            onSubmit={handleSubmit(handleAddAirline)}
            className=" w-[92%]  sm:w-[88%] md:w-[92%] xmd:w-[90%] lg:w-[84%] xl:w-[78%] m-auto flex flex-col gap-4 xsm:gap-5 sm:gap-6 md:gap-7 lg:gap-8  "
          >
            {/*airline name input  */}
            <div className="flex flex-col gap-1 airlineName">
              <label htmlFor="airlineName">Airline name</label>
              <input
                type="text"
                id="airlineName"
                {...register("airlineName", {
                  required: "Airline name is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline name"
              />

              {errors?.airline && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.airline?.message}
                </p>
              )}
            </div>
            {/*airline name input  */}

            {/* airline logo input field  */}
            <div className="flex flex-col gap-1 airlineLogo ">
              <label htmlFor="file_input">Airline logo</label>
              <input
                {...register("file_input", {
                  required: "Airline logo is required",
                })}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                id="file_input"
                type="file"
              />

              {errors?.file_input && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.file_input?.message}
                </p>
              )}
            </div>
            {/* airline logo input field  */}

            {/* airline code input starts  */}
            <div className="flex flex-col gap-1 airlineCode">
              <label htmlFor="airlineCode">Airline code</label>
              <input
                type="text"
                id="airlineCode"
                {...register("airlineCode", {
                  required: "Airline code is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-400     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter airline Code"
              />

              {errors?.airlineCode && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.airlineCode?.message}
                </p>
              )}
            </div>
            {/* airline code input ends  */}

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
                "Add Airline"
              )}
            </button>
          </form>
        </div>
        {/* add airline card ends  */}
      </div>
    </div>
  );
};

export default AddAirline;
