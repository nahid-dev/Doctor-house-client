import React from "react";
import PageHeader from "../../components/pageHeader/PageHeader";
import AppointDate from "../../components/appointDate/AppointDate";
// import Category from "../../components/category/Category";

const Appointment = () => {
  return (
    <>
      <PageHeader
        title={"Appointment"}
        navigation={"Home/Appointment"}
      ></PageHeader>
      <AppointDate></AppointDate>
      {/* <Category></Category> */}
    </>
  );
};

export default Appointment;
