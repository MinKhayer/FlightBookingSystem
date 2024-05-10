import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "../UseAxiosPrivate";

const GetAllAIrline = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: allAirlineData,
    isLoading: allAirlineLoading,
    refetch: allAirlineRefetch,
  } = useQuery({
    queryKey: ["allAirline", "Airlines"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/airline`);
      return res?.data;
    },
  });
  return { allAirlineData, allAirlineLoading, allAirlineRefetch };
};

export default GetAllAIrline;
