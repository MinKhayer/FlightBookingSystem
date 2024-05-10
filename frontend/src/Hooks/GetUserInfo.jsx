import { useQuery } from "@tanstack/react-query";
import { UseAuth } from "../Context/AuthContext";
import UseAxiosPrivate from "./UseAxiosPrivate";

const GetUserInfo = () => {
  const { user } = UseAuth();
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: userInfo,
    isLoading: userInfoLoading,
    refetch: userInfoRefetch,
  } = useQuery({
    queryKey: ["userInfo", "user"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/user/${user?._id}`);
      return res?.data;
    },
  });
  return { userInfo, userInfoLoading, userInfoRefetch };
};

export default GetUserInfo;
