import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useDoctor = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const {
    data: allDoctors = [],
    refetch,
    isLoading: doctorsLoading,
  } = useQuery({
    queryKey: ["allDoctors", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/allDoctors");
      return res.data;
    },
  });
  return [allDoctors, refetch, doctorsLoading];
};

export default useDoctor;
