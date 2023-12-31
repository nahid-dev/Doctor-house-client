import React from "react";
import useAppointment from "../../Hooks/useAppointment";
import Loader from "../../components/loader/Loader";
import PaymentModal from "./PaymentModal";

const MyAppointment = () => {
  const [appointments, , appointmentLoading] = useAppointment();
  // console.log(appointments);
  if (appointmentLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="overflow-x-auto rounded-lg bg-white">
        <table className="table ">
          {/* head */}
          <thead className="bg-gray-200">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th className="text-center">Time</th>
              <th className="text-center">Treatment</th>
              <th className="text-center">Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <th>{index + 1}</th>
                <th>{appointment.name}</th>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td className="text-center">{appointment?.treatment}</td>
                <td className="text-center space-x-3 ">
                  {appointment.status === "paid" ? (
                    <span className="text-[#F7A582]">{appointment.status}</span>
                  ) : (
                    <PaymentModal appointment={appointment}></PaymentModal>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
