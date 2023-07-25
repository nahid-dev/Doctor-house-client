import React, { useState } from "react";
import Select from "react-select";
import SubmitButton from "../../components/submiteButton/SubmitButton";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Options
const options = [
  { value: "Teeth Orthodontics", label: "Teeth Orthodontics" },
  { value: "Cosmetic Dentisty", label: "Cosmetic Dentisty" },
  { value: "Cavity Protection", label: "Cavity Protection" },
  { value: "Pediatric Dental", label: "Pediatric Dental" },
  { value: "Teeth Cleaning", label: "Teeth Cleaning" },
  { value: "Oral Surgery", label: "Oral Surgery" },
];

const subOptions = [
  { value: "Teeth Orthodontics", label: "Teeth Orthodontics" },
  { value: "Cosmetic Dentisty", label: "Cosmetic Dentisty" },
  { value: "Cavity Protection", label: "Cavity Protection" },
  { value: "Pediatric Dental", label: "Pediatric Dental" },
  { value: "Teeth Cleaning", label: "Teeth Cleaning" },
  { value: "Oral Surgery", label: "Oral Surgery" },
];

const imgbb_hosting_img = import.meta.env.VITE_IMG_HOST;

const AddADoctor = () => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [specialty, setSpecialty] = useState("");
  const [axiosSecure] = useAxios();
  const [selectedDate, setSelectedDate] = useState(null);

  // IMAGE HOSTING URL
  const hosted_img_url = `https://api.imgbb.com/1/upload?key=${imgbb_hosting_img}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSpecialty = (selectSpecialty) => {
    setSpecialty(selectSpecialty);
  };
  const handleChange = (selectOption) => {
    setSelectOptions(selectOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const options = { weekday: "short", day: "numeric", month: "long" };
    return date.toLocaleDateString(undefined, options);
  };

  const newDate = formatDate(selectedDate);

  const onSubmit = (data) => {
    // console.log(data, selectOptions, specialty);
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    fetch(hosted_img_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { name, title, email, rating } = data;
          const newDoctor = {
            name,
            title,
            email,
            rating,
            image: imgUrl,
            selectOptions,
            specialty: specialty.label,
            date: newDate,
          };
          axiosSecure.post("/doctor", newDoctor).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Doctor added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">Add A New Doctor.</h2>
      <div className="md:w-1/2 bg-white p-10 mt-5 rounded-lg">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* NAME */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm">Name</label>
              <input
                className="border text-[#9E9C9C] text-[14px] rounded-md md:px-5 px-3 py-1 md:py-3"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            {/* TITLE */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm">Title</label>
              <input
                className="border text-[#9E9C9C] text-[14px] rounded-md md:px-5 px-3 py-1 md:py-3"
                type="text"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span className="text-red-600">Title is required</span>
              )}
            </div>
            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm">Email</label>
              <input
                className="border text-[#9E9C9C] text-[14px] rounded-md md:px-5 px-3 py-1 md:py-3"
                type="text"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            {/* SPECIALTY */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm">Specialty</label>
              <Select
                options={options}
                value={specialty}
                onChange={handleSpecialty}
              ></Select>
            </div>
            {/* SUB-SPECIALTY */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm">Sub Options</label>
              <Select
                options={subOptions}
                value={selectOptions}
                onChange={handleChange}
                isMulti={true}
              ></Select>
            </div>
            {/* RATING */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm">Rating</label>
              <input
                className="border text-[#9E9C9C] text-[14px] rounded-md md:px-5 px-3 py-1 md:py-3"
                type="number"
                {...register("rating", { required: true })}
              />
              {errors.rating && (
                <span className="text-red-600">Rating is required</span>
              )}
            </div>
            {/* Date */}
            <div className="flex flex-col">
              <label htmlFor="dateInput" className="mb-2 font-semibold text-sm">
                Date :
              </label>
              <DatePicker
                id="dateInput"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="EEE, d MMMM"
                showYearDropdown={false}
                placeholderText="Select a date"
                className="border text-[#9E9C9C] text-[14px] rounded-md md:px-5 px-3 py-1 md:py-3 w-full"
              />
            </div>

            {/* IMAGE */}
            <div className="flex flex-col">
              <label className="mb-2 font-semibold text-sm">Image</label>
              <input
                className="border-dashed border-2 text-[#9E9C9C] text-[14px] rounded-md md:px-5 px-3 py-1 md:py-3 "
                type="file"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-600">Photo is required</span>
              )}
            </div>
            {/* SUBMIT BUTTON */}
            <div>
              <SubmitButton title={"Add"} type={"submit"}></SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddADoctor;
