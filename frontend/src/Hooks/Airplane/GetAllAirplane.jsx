import UseAxiosPrivate from "../UseAxiosPrivate";
import { useQuery } from "@tanstack/react-query";

const GetAllAirplane = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: allAirplaneData,
    isLoading: allAirplaneLoading,
    refetch: allAirplaneRefetch,
  } = useQuery({
    queryKey: ["allAirplane", "Airplane"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/airplane`);
      return res?.data;
    },
  });
  return { allAirplaneData, allAirplaneLoading, allAirplaneRefetch };
};

export default GetAllAirplane;
