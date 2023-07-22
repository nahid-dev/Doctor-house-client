import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxios();

  const {
    data: allUsers = [],
    refetch,
    isLoading: usersLoading,
  } = useQuery({
    queryKey: ["allUsers", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });

  return [allUsers, refetch, usersLoading];
};

export default useUsers;
