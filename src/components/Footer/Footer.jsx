import React from "react";
import footerLogo from "../../assets/footerLogo/footerLogo.png";
import { Link } from "react-router-dom";

const Footer = ({ bg }) => {
  return (
    <footer className={`${bg} pt-10`}>
      <div className="main-container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 01 */}
          <div>
            <div className="mb-7">
              <img src={footerLogo} alt="Footer_Logo" />
            </div>
            <div>
              <p className="mb-7 section-pera">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. has been since the printer took.
              </p>
              <Link
                to="/appointment"
                className="btn border border-[#F7A582] bg-transparent text-[#F7A582] rounded-lg hover:bg-[#F7A582] hover:text-white transition duration-500"
              >
                Appointment
              </Link>
            </div>
          </div>
          {/* Column 02 */}
          <div>
            <div>
              <h5 className="text-[#0A0808] text-xl font-bold mb-5">
                Quick Links
              </h5>
              <ul className="space-y-2">
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  About Us
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Service
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Doctor
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Department
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Only Payment
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Contact Us
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  My Account
                </li>
              </ul>
            </div>
          </div>
          {/* Column 03 */}
          <div>
            <div>
              <h5 className="text-[#0A0808] text-xl font-bold mb-5">
                Doc House Services
              </h5>
              <ul className="space-y-2">
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Pediatric Clinic
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Diagnosis Clinic
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Cardiac Clinic
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Laboratory Analysis
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Gynecological Clinic
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Personal Counseling
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Dental Clinic
                </li>
              </ul>
            </div>
          </div>
          {/* Column 04 */}
          <div>
            <div>
              <h5 className="text-[#0A0808] text-xl font-bold mb-5">
                Working Hours
              </h5>
              <ul className="space-y-2">
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Monday - 10 am to 7 pm
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Tuesday - 10 am to 7 pm
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Wednesday - 10 am to 7 pm
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Thursday - 10 am to 7 pm
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Friday - 10 am to 7 pm
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Saturday - 10 am to 7 pm
                </li>
                <li className="text-[#6C6B6B] text-[18px] font-semibold font-sans">
                  Sunday - 10 am to 7 pm
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <div className="text-center mt-5">
            <p className="text-[#6C6B6B] md:text-[18px]  font-semibold">
              Copyright &copy; 2022 - All right reserved by Doc House Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
