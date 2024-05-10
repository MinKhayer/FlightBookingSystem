import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "../UseAxiosPrivate";

const GetSingleAirplane = (id) => {
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const {
    data: airplaneData,
    isLoading: airplaneDataLoading,
    refetch: airplaneDataRefetch,
  } = useQuery({
    queryKey: ["airplaneData", "singleAirplane"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/airplane/${id}`);
      return res?.data;
    },
  });
  return { airplaneData, airplaneDataLoading, airplaneDataRefetch };
};

export default GetSingleAirplane;
