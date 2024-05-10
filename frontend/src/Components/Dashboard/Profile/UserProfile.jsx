import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import { UseAuth } from "../../../Context/AuthContext";
import GetProfile from "../../../Hooks/GetProfile";
import GetUserInfo from "../../../Hooks/GetUserInfo";
import InfoCard from "./InfoCard";

const UserProfile = () => {
  const { user, userLoading, uid } = UseAuth();
  const { userInfo, userInfoLoading, userInfoRefetch } = GetUserInfo();

  const { profileData, profileDataLoading, profileDataRefetch } =
    GetProfile(uid);

  // console.log(userInfo);
  // console.log(user);
  console.log(profileData);

  if (userInfoLoading || userLoading || profileDataLoading) {
    return <p>Loading ...... </p>;
  }

  return (
    <div className="UserProfileContainer">
      <div className="UserProfileWrapper  flex justify-center items-center py-8  ">
        {/* user profile card starts  */}
        <div className="userProfileCard w-[80%]  bg-gray-100  shadow-lg border border-gray-200 py-8 px-10 rounded-md  ">
          {/* user profile top starts  */}
          <div className="userProgileTop flex justify-between items-center  ">
            {/* profile name , iamge section staqrts  */}
            <div className="profileLeft flex justify-center items-center gap-x-4 ">
              <div className="profileImg w-[10rem]">
                <img
                  className="rounded-full object-contain"
                  // src="https://i.ibb.co/pWh468H/Shutterstock-10472278t.jpg"
                  src={profileData?.userImg}
                  alt="Rounded avatar"
                />
              </div>
              <h1 className=" font-semibold text-2xl  ">{profileData?.name}</h1>
            </div>

            {/* profile name , iamge section ends  */}

            {/* edit button section starts  */}
            <div className="editBtn">
              <Link to={"/dashboard/editProfile"}>
                <button className=" rounded-md border border-red-500 py-1 px-3 flex justify-between items-center gap-x-2 text-red-600 hover:bg-red-500 hover:text-gray-50 active:scale-95  ">
                  {" "}
                  <span>
                    {" "}
                    <FaEdit />{" "}
                  </span>{" "}
                  Edit{" "}
                </button>
              </Link>
            </div>
            {/* edit button section ends  */}
          </div>
          {/* user profile top ends  */}

          {/* user profile bottom starts  */}
          <div className="userProfileBottom mt-10 ">
            <h1 className=" text-3xl font-semibold mb-8 ">Personal Details</h1>

            {/* basic info card starts  */}
            <div className="basicInfo mb-8   ">
              {profileData && <InfoCard info={profileData} />}
            </div>
            {/* basic info card ends  */}

            {/*  */}
          </div>
          {/* user profile bottom ends  */}

          {/*  */}
        </div>
        {/* user profile card ends  */}
      </div>
    </div>
  );
};

export default UserProfile;
