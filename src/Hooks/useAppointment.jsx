import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useAppointment = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxios();
  const {
    data: appointments = [],
    refetch,
    isLoading: appointmentLoading,
  } = useQuery({
    queryKey: ["myAppointment", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/myAppointment?email=${user?.email}`);
      return res.data;
    },
  });
  return [appointments, refetch, appointmentLoading];
};

export default useAppointment;
