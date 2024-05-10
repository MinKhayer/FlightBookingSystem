import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "./UseAxiosPrivate";

const GetDestinations = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: destinationsData,
    isLoading: destinationsDataLoading,
    refetch: destinationsDataRefetch,
  } = useQuery({
    queryKey: ["destinations", "allDedstination"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/destination`);
      return res?.data;
    },
  });
  return { destinationsData, destinationsDataLoading, destinationsDataRefetch };
};

export default GetDestinations;
