import React from "react";
import useUsers from "../../Hooks/useUsers";

const AllUsers = () => {
  const [allUsers, refetch, usersLoading] = useUsers();
  return (
    <div>
      <h3 className="text-3xl font-bold">All Users: {allUsers.length} </h3>
    </div>
  );
};

export default AllUsers;
