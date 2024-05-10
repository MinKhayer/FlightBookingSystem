import { useQuery } from "@tanstack/react-query";
import UseAxiosPrivate from "../UseAxiosPrivate";

const GetAllRoute = () => {
  const { axiosPrivateUrl } = UseAxiosPrivate();

  const {
    data: allRoutesData,
    isLoading: allRoutesLoading,
    refetch: allRoutesRefetch,
  } = useQuery({
    queryKey: ["allRoutes", "Routes"],
    queryFn: async () => {
      const res = await axiosPrivateUrl.get(`/api/route`);
      return res?.data;
    },
  });
  return { allRoutesData, allRoutesLoading, allRoutesRefetch };
};

export default GetAllRoute;
