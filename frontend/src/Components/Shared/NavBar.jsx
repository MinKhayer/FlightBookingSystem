import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "../../Context/AuthContext";
import UseAxiosPrivate from "../../Hooks/UseAxiosPrivate";

const NavBar = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const { user, setToken, setUser, uid } = UseAuth();
  // const [toggle, setToggle] = useState(false);
  // const [navToggle, setNavToggle] = useState(false);
  const [userImg, setUserImg] = useState(null);

  // const handleToggle = () => {
  //   setNavToggle(!navToggle);
  // };

  // ! logout function
  const handleLogout = () => {
    localStorage.removeItem("Authorization");
    setUser(null);
    setToken(null);
    window.location.reload();
  };

  //! useEffect to set id
  useEffect(() => {
    if (uid) {
      axiosPrivateUrl
        .get(`/api/profile/${uid}`)
        .then((response) => {
          // console.log(response?.data);
          setUserImg(response?.data?.userImg);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [axiosPrivateUrl, uid]);

  // console.log(user);
  // console.log("user in nav = ", user);

  return (
    <div className="navContainer   ">
      <div className="navWrapper  m-auto flex justify-between py-3 px-6  ">
        {/* nav left starts  */}
        <div className="navLeft   flex justify-between items-center gap-x-8  ">
          {/* nav left logo starts  */}
          <Link to={"/"}>
            <div className="navLogo flex justify-center items-center gap-x-1   cursor-pointer  ">
              <div className="navImg w-10 h-10  ">
                <img
                  src="https://i.ibb.co/j8Npf1t/travelling.png"
                  alt=""
                  className=" w-full h-full  "
                />
              </div>
              <h1 className=" font-bold text-lg  ">AeroSKY </h1>
            </div>
          </Link>
          {/* nav left logo ends  */}
        </div>
        {/* nav left ends  */}

        {/* nav right starts  */}
        <div className="navRight flex justify-between items-center gap-x-2 sm:gap-x-3 md:gap-x-4   ">
          {/* user avatar starts  */}

          {user && (
            <Link to={"/dashboard/profile"}>
              <div className="userAvatar flex justify-center items-center self-center gap-x-1 ">
                <div className="max-w-[30px]  ">
                  <img
                    className="rounded-full object-contain w-full h-full "
                    src={userImg}
                    alt="Rounded avatar"
                  />
                </div>
                <h1 className="  font-medium  text-xs sm:text-sm ">Profile</h1>
              </div>
            </Link>
          )}

          {/* user avatar ends  */}

          {user ? (
            <p
              className="  primaryBg px-3 py-2 text-xs font-semibold text-white   block  lg:px-4 lg:text-sm cursor-pointer "
              onClick={() => handleLogout()}
            >
              Sign out
            </p>
          ) : (
            <Link
              to={`/login`}
              className=" primaryBg px-3 py-2 text-xs font-semibold text-white  rounded  block  lg:px-4 lg:text-sm"
            >
              Log in
            </Link>
          )}
        </div>
        {/* nav right ends  */}
      </div>
    </div>
  );
};

export default NavBar;
