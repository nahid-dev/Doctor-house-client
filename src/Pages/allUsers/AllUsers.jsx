import React from "react";
import useUsers from "../../Hooks/useUsers";

const AllUsers = () => {
  const [allUsers, refetch, usersLoading] = useUsers();
  return (
    <div>
      <h3 className="text-3xl font-bold">All Users: {allUsers.length} </h3>
      <div>
        <div className="overflow-x-auto rounded-lg bg-white">
          <table className="table ">
            {/* head */}
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Mail</th>
                <th>Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* All Users List */}
              {allUsers?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="text-center space-x-3">
                    <span>
                      <button className="roleButton">Make Admin</button>
                    </span>
                    <span>
                      <button className="roleButton">Remove User</button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
