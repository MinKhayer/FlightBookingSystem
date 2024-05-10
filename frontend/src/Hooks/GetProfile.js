import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "./UseAxiosPrivate";

const GetProfile = (id) => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: profileData,
    isLoading: profileDataLoading,
    refetch: profileDataRefetch,
  } = useQuery({
    queryKey: ["userProfile", "getUserProfile"],
    queryFn: async () => {
      // console.log("id in hook = ", id);
      const response = await axiosPrivateUrl.get(`/api/profile/${id}`);
      return response?.data;
    },
  });

  return {
    profileData,
    profileDataLoading,
    profileDataRefetch,
  };
};

export default GetProfile;
