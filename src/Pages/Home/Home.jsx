import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Services from "../../components/Services/Services";
import HomeInfo from "../../components/homeInfo/HomeInfo";
import Testemonial from "../../components/Testemonial/Testemonial";
import ExpertDoctor from "../../components/ExpertDoc/ExpertDoctor";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Services></Services>
      <HomeInfo></HomeInfo>
      <Testemonial></Testemonial>
      <ExpertDoctor></ExpertDoctor>
      <ContactUs></ContactUs>
      {/* Footer Section */}
      <Footer bg={"bg-[#F3F3F3]"}></Footer>
    </>
  );
};

export default Home;
