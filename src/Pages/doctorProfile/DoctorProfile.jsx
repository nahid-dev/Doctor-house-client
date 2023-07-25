import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";
import ProfileTop from "../../components/profileTop/ProfileTop";
import DoctorTab from "../../components/profileTab/DoctorTab";

const DoctorProfile = () => {
  const { id } = useParams();
  console.log(id);

  const { data: doctorProfile = [], isLoading: profileLoading } = useQuery({
    queryKey: ["doctorProfile"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/doctor/${id}`);
      return res.json();
    },
  });

  if (profileLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <PageHeader
        title={"Doctor Profile"}
        navigation={"Home/ Doctor Profile"}
      ></PageHeader>
      <ProfileTop doctorProfile={doctorProfile}></ProfileTop>
      <DoctorTab></DoctorTab>
    </>
  );
};

export default DoctorProfile;
