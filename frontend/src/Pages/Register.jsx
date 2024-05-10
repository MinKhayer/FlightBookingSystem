import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { UseAuth } from "../Context/AuthContext";
import { registerSuccessfully } from "../Utils/ToastFunctions";
import UseAxiosPrivate from "../Hooks/UseAxiosPrivate";

const Register = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // registration function
  const handleRegister = async (data) => {
    const userEmail = data?.email;
    const userName = data?.userName;
    const userPassword = data?.password;
    const userImage = data?.file_input[0];

    const formData = new FormData();
    formData.append("image", userImage);

    const imageResponse = await axios.post(
      "https://api.imgbb.com/1/upload?key=00fc9e4302335a502d2035bb196a9314",
      formData
    );

    // console.log(imageResponse?.data?.data?.url);
    const userImg = imageResponse?.data?.data?.url;

    const registrationData = {
      username: userName,
      email: userEmail,
      password: userPassword,
      userImg,
    };

    axiosPrivateUrl
      .post("/api/user/register", registrationData)
      .then((response) => {
        console.log(response?.data);
        if (response?.data?.token) {
          registerSuccessfully();
          navigate("/login");
          reset();
        }
      })
      .catch((error) => {
        console.log("error in register ");
        console.log(error);
      });

    // console.log(registrationData);

    // reset();
  };

  return (
    <div className="registerContainer">
      <div className="registerWraper py-8 bg-[url('https://i.ibb.co/Qbxd4qT/pexels-jeffry-surianto-11257773.jpg')] bgImage flex justify-center items-center ">
        {/* registration card  */}
        <div className="registerCard    shadow-2xl  py-9 px-4 w-[94%] xsm:w-[88%] sm:w-[81%] md:w-[76%] xmd:w-[68%] lg:w-[56%] rounded-md border border-gray-200  backdrop-blur-lg ">
          <h1 className="mb-4 text-xl font-bold text-center  xsm:text-2xl md:text-3xl sm:mb-6 md:mb-8 lg:mb-10 text-gray-50 ">
            Register{" "}
          </h1>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className=" w-[98%] xsm:w-[96%] sm:w-[93%] md:w-[88%] m-auto flex flex-col gap-3 xsm:gap-5 sm:gap-6   "
          >
            {/* user name input  */}
            <div className="flex flex-col gap-1 userInput ">
              <label htmlFor="name" className="text-gray-100 ">
                User name
              </label>
              <input
                type="text"
                id="name"
                {...register("userName", {
                  required: "user name is required",
                })}
                className={`block w-full m-auto   border bg-gray-50 border-gray-300     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="User name"
              />

              {errors?.userName && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.userName?.message}
                </p>
              )}
            </div>
            {/* user name input ends  */}

            {/* user image field  */}
            <div className="flex flex-col  gap-1 userImage ">
              <label htmlFor="file_input" className="text-gray-100 ">
                User image
              </label>
              <input
                {...register("file_input", {
                  required: "user image is required",
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
            {/* user image field  */}

            {/* email input  */}
            <div className="flex flex-col gap-1 emailInput ">
              <label htmlFor="email" className="text-gray-100 ">
                User Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                })}
                className={`block w-full m-auto  border bg-gray-50 border-gray-300     text-gray-900 text-sm rounded   p-2.5 outline-none`}
                placeholder="Enter your email"
              />

              {errors?.email && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.email?.message}
                </p>
              )}
            </div>
            {/* email input  */}

            {/* password input  */}
            <div className="flex flex-col gap-1 passwordInput ">
              <label htmlFor="password" className="text-gray-100 ">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="block w-full m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5 outline-none "
                placeholder="Enter your password"
              />
              {errors?.password && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* password input  */}

            {/* confirm password input  */}
            <div className="flex flex-col gap-1 confirmPassword">
              <label htmlFor="confirmPassword" className="text-gray-100 ">
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Password is required",
                  validate: (value) =>
                    value === getValues("password") || " password don't match",
                })}
                className="block w-full m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5 outline-none "
                placeholder="Confirm password"
              />
              {errors?.confirmPassword && (
                <p className=" pt-1.5 text-red-600 font-semibold ">
                  {errors?.confirmPassword?.message}
                </p>
              )}
            </div>
            {/* confirm password input ends  */}

            <button
              disabled={isSubmitting}
              className="flex items-center justify-center w-full py-2 text-lg font-medium rounded bg-sky-500 hover:bg-sky-600 navLinkFont text-gray-50"
            >
              {isSubmitting ? (
                <div role="status  ">
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
                "Register"
              )}
            </button>
          </form>
          <div className="mt-3 text-sm text-center registerDivert sm:mt-4 lg:mt-5 xsm:text-base md:text-lg ">
            <p>
              Already have an account ?{" "}
              <span className="text-gray-100 logoFont">
                {" "}
                <Link to={"/login"}>Login</Link>{" "}
              </span>
            </p>
          </div>
        </div>
        {/* registration card ends */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
