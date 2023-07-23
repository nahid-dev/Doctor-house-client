import React from "react";
import useUsers from "../../Hooks/useUsers";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [allUsers, refetch, usersLoading] = useUsers();

  // Handle Admin
  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: `${user.name} is admin now`,
          });
        }
      });
  };
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
                  <td className="text-right space-x-3">
                    {user.role === "admin" ? (
                      ""
                    ) : (
                      <span>
                        <button
                          onClick={() => handleAdmin(user)}
                          className="roleButton"
                        >
                          Make Admin
                        </button>
                      </span>
                    )}
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
