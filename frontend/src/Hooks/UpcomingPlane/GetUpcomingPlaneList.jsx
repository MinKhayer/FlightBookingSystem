import UseAxiosPrivate from "../UseAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const GetUpcomingPlaneList = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: upcomingPlaneData,
    isLoading: upcomingPlaneDataLoading,
    refetch: upcomingPlaneDataRefetch,
  } = useQuery({
    queryKey: ["allAirplane", "Airplane"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/airplane/upcoming`);
      return res?.data;
    },
  });
  return {
    upcomingPlaneData,
    upcomingPlaneDataLoading,
    upcomingPlaneDataRefetch,
  };
};

export default GetUpcomingPlaneList;
