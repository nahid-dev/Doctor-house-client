import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";

const DoctorProfile = () => {
  const id = useParams();
  console.log(id);
  return (
    <>
      <PageHeader
        title={"Doctor Profile"}
        navigation={"Home/ Doctor Profile"}
      ></PageHeader>
    </>
  );
};

export default DoctorProfile;
