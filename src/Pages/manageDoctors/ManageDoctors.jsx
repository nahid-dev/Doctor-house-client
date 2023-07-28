import React from "react";
import useDoctor from "../../Hooks/useDoctor";
import Swal from "sweetalert2";
import Loader from "../../components/loader/Loader";

const ManageDoctors = () => {
  const [allDoctors, refetch, doctorsLoading] = useDoctor();

  const handleDelete = (doc) => {
    fetch(`http://localhost:5000/doctor/${doc._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.deletedCount > 0) {
          Swal.fire("Doctor is deleted successfully");
        }
      });
  };

  if (doctorsLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <h3 className="text-3xl font-bold md:mb-4">
        All Users: {allDoctors.length}
      </h3>
      <div>
        <div className="overflow-x-auto rounded-lg bg-white">
          <table className="table ">
            {/* head */}
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th className="text-center">Specialty</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allDoctors &&
                allDoctors.map((doctor, index) => (
                  <tr key={doctor._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                          <img src={doctor.image} alt="Doctor Image" />
                        </div>
                      </div>
                    </td>
                    <td>{doctor.name}</td>
                    <td className="text-center">{doctor.specialty}</td>
                    <td className="text-center space-x-3 ">
                      <button
                        onClick={() => handleDelete(doctor)}
                        className="py-2 px-4 text-white rounded-md bg-[#E11244]"
                      >
                        Delete
                      </button>
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

export default ManageDoctors;
