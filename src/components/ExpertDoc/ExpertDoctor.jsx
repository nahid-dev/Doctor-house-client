import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
// import doctorOneImg from "../../assets/DoctorsImg/doc-1.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import { BsCalendar4 } from "react-icons/bs";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "../loader/Loader";

// Doctor's Data
// const Doctors = [
//   {
//     id: 1,
//     name: "Karyen Anderson",
//     doc_image: { doctorOneImg },
//     title: "BTP -  Senior Physiotherapist",
//     rating: 3,
//     address: "Dhanmondi, Dhaka, Bangladesh",
//     available: "Available On Mon, 22 December",
//     fees: 15,
//   },
//   {
//     id: 2,
//     name: "Karyen Anderson",
//     doc_image: { doctorOneImg },
//     title: "BTP -  Senior Physiotherapist",
//     rating: 4.9,
//     address: "Dhanmondi, Dhaka, Bangladesh",
//     available: "Available On Mon, 22 December",
//     fees: 15,
//   },
//   {
//     id: 3,
//     name: "Karyen Anderson",
//     doc_image: { doctorOneImg },
//     title: "BTP -  Senior Physiotherapist",
//     rating: 4.9,
//     address: "Dhanmondi, Dhaka, Bangladesh",
//     available: "Available On Mon, 22 December",
//     fees: 15,
//   },
// ];

const ExpertDoctor = () => {
  const { data: doctors = [], isLoading: doctorsLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      return res.json();
    },
  });

  if (doctorsLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <SectionHeader
        title={"Our Expert Doctors"}
        pera={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></SectionHeader>
      {/* Doctors area */}

      <div className="main-container my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="border p-5 rounded-lg">
              <div className="mb-5">
                <img className="w-full" src={doctor.image} alt="" />
              </div>
              <div>
                <h6 className="font-bold text-xl mb-2">{doctor.name}</h6>
                <p className="card-text-color mb-1">{doctor.title}</p>
              </div>
              <div className="mb-6">
                <Rating
                  value={doctor.rating}
                  readOnly
                  style={{ maxWidth: 100 }}
                ></Rating>
              </div>
              <div className="mb-2">
                <div className="flex items-center">
                  <span className="mr-3">
                    <TfiLocationPin></TfiLocationPin>
                  </span>
                  <span className="card-text-color">
                    Dhanmondi, Dhaka, Bangladesh
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-3">
                  <BsCalendar4></BsCalendar4>
                </span>
                <span className="card-text-color">
                  Available On {doctor.date}
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">
                  <PiCurrencyCircleDollarLight></PiCurrencyCircleDollarLight>
                </span>
                <span className="card-text-color">$ 15</span>
              </div>
              <div className="mt-2">
                <button className="btn btn-block border bg-transparent text-[#F7A582] rounded-lg hover:bg-[#F7A582] hover:text-white transition duration-500">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpertDoctor;
