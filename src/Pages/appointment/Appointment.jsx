import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import AppointDate from "../../components/appointDate/AppointDate";

const Appointment = () => {
  return (
    <>
      <PageHeader
        title={"Appointment"}
        navigation={"Home/Appointment"}
      ></PageHeader>
      <AppointDate></AppointDate>
    </>
  );
};

export default Appointment;
