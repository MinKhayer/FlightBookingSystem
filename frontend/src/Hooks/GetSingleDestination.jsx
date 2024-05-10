import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "./UseAxiosPrivate";

const GetSingleDestination = (id) => {
  const { axiosPrivateUrl } = UseAxiosPrivate();
  const {
    data: destinationData,
    isLoading: destinationDataLoading,
    refetch: destinationDataRefetch,
  } = useQuery({
    queryKey: ["destination", "singleDestination"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/destination/${id}`);
      return res?.data;
    },
  });
  return { destinationData, destinationDataLoading, destinationDataRefetch };
};

export default GetSingleDestination;
