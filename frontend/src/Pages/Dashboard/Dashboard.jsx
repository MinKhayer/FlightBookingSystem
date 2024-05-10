import { useEffect, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { UseAuth } from "../../Context/AuthContext";
import UseAxiosPrivate from "../../Hooks/UseAxiosPrivate";
import { adminProfileMenu, userProfileMenu } from "../../Utils/Constants";

const Dashboard = () => {
  const navigate = useNavigate();
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { user, userLoading, setUser, uid } = UseAuth();
  const [userImg, setUserImg] = useState(null);
  const [userName, setUserName] = useState(null);

  // ! logout function
  const handleLogout = () => {
    localStorage.removeItem("Authorization");
    setUser(null);
    navigate("/");
  };

  //! useeffect to get user info
  useEffect(() => {
    if (uid) {
      axiosPrivateUrl
        .get(`/api/profile/${uid}`)
        .then((response) => {
          setUserImg(response?.data?.userImg);
          setUserName(response?.data?.name);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  if (userLoading) {
    return <p className="text-5xl text-center font-semibold ">Loading....</p>;
  }

  return (
    <section className="relative flex justify-end    ">
      {/* sidebar container starts  */}
      <div
        className={` SideBarContainer fixed top-0 ${
          isSidebarActive ? "left-[0%]" : "left-[-100%]"
        } z-20  md:left-0 duration-200  `}
      >
        <div className=" mainContainer relative w-64 h-screen p-5 pt-5 duration-300 bg-gray-600   sm:w-64  flex flex-col justify-between ">
          {/* top  container starts */}
          <div className=" topContainer AccountContainer ">
            <div className="flex items-center space-x-4 w-20">
              <img
                className="p-1 rounded-full cursor-pointer ring-2 ring-gray-300 dark:ring-gray-500 object-contain"
                src={userImg}
                alt="Bordered avatar"
              />

              <div className="font-medium text-white sm:block  ">
                <div>
                  <p> {userName} </p>
                </div>
              </div>
            </div>
          </div>

          {/* top  container ends */}

          {/* middle list items start  */}

          <div className="middleListContainer  ">
            <Link
              to={"/"}
              className={`flex rounded-md  mb-3 py-3 px-4 cursor-pointer text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center  bg-[#fff3]`}
            >
              <h1 className={` gap-1  origin-left duration-200 w-full `}>
                Home
              </h1>
            </Link>

            <div className="mt-3 sidebarList">
              {/*  */}

              {/* admin menu starts  */}

              {user && user?.role === "Admin"
                ? adminProfileMenu &&
                  adminProfileMenu.map((ele, ind) => (
                    <NavLink
                      to={ele.path}
                      key={ind}
                      className={`flex rounded-md py-3 px-4 cursor-pointer bg-[#fff3] text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center  mb-3`}
                    >
                      <h1
                        className={` gap-1  origin-left duration-200 w-full `}
                      >
                        {ele.title}
                      </h1>
                    </NavLink>
                  ))
                : userProfileMenu &&
                  userProfileMenu.map((ele, ind) => (
                    <NavLink
                      to={ele.path}
                      key={ind}
                      className={`flex rounded-md py-3 px-4 cursor-pointer bg-[#fff3] text-gray-300 hover:bg-gray-50 hover:text-gray-700 text-sm items-center  mb-3`}
                    >
                      <h1
                        className={` gap-1  origin-left duration-200 w-full `}
                      >
                        {ele.title}
                      </h1>
                    </NavLink>
                  ))}

              {/*  */}
            </div>
          </div>

          {/* middle list items end  */}

          {/* bottom section starts  */}
          <div
            className="bottomSection bg-red-500 hover:bg-red-600 py-1.5 rounded text-gray-50 font-medium  flex justify-center items-center  gap-x-2 cursor-pointer active:scale-95 duration-200  "
            onClick={() => handleLogout()}
          >
            <h1>Log out </h1>
            <IoLogOutOutline />
          </div>
          {/* bottom section ends  */}

          {/*  */}
        </div>
      </div>
      {/* sidebar container ends  */}

      {/* hamburger menu */}
      <div
        onClick={() => setIsSidebarActive(!isSidebarActive)}
        className="fixed bottom-[20px] h-[50px] right-[20px] md:hidden flex flex-col justify-center gap-2 bg-gray-500 p-2 rounded cursor-pointer z-[20] "
      >
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "-rotate-45 translate-y-[13px]" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`line duration-300 h-[5px] w-[40px] bg-white rounded ${
            isSidebarActive ? "rotate-45 translate-y-[-13px]" : ""
          }`}
        ></div>
      </div>
      {/* hamburger emnu ends  */}

      {/* sidebar child component starts  */}
      <div className="w-[100%] md:w-[calc(100%-16rem)]   ">
        <Outlet />
      </div>

      {/* sidebar child components ends */}
      {/* child components starts ends */}
    </section>
  );
};

export default Dashboard;
