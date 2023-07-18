import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Services from "../../components/Services/Services";
import HomeInfo from "../../components/homeInfo/HomeInfo";
import Testemonial from "../../components/Testemonial/Testemonial";
import ExpertDoctor from "../../components/ExpertDoc/ExpertDoctor";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Services></Services>
      <HomeInfo></HomeInfo>
      <Testemonial></Testemonial>
      <ExpertDoctor></ExpertDoctor>
    </>
  );
};

export default Home;
