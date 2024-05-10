import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "../UseAxiosPrivate";

const GetSingleRoute = (id) => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: routeData,
    isLoading: routeDataLoading,
    refetch: routeDataRefetch,
  } = useQuery({
    queryKey: ["routeData", "singleRouteData"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/route/${id}`);
      return res?.data;
    },
  });
  return { routeData, routeDataLoading, routeDataRefetch };
};

export default GetSingleRoute;
