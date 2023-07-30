import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { RiCloseFill } from "react-icons/ri";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CategoryModal({ service, date }) {
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = (data) => {
    if (user && user?.email) {
      const appointment = {
        date: date,
        time: service.time,
        name: data.name,
        phone_number: data.number,
        email: data.email,
        fee: service.fee,
        user_email: user?.email,
        treatment: service.name,
      };
      fetch("https://server-nahid-dev.vercel.app/appointment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(appointment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              icon: "success",
              title: "Appointment Successfully",
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login First",
      });
      navigate("/authentication/login", { state: { from: location } });
    }
  };

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#F7A582] text-white py-2 px-4"
        >
          Book Appointment
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-between">
                      <span>{service.name}</span>
                      <span
                        onClick={closeModal}
                        className="bg-[#07332F] text-white rounded-full cursor-pointer"
                      >
                        <RiCloseFill size={24}></RiCloseFill>
                      </span>
                    </div>
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2 flex flex-col space-y-2">
                      <span className="bg-[#E6E6E6] p-3 rounded-md">
                        {date}
                      </span>
                      <span className="bg-[#E6E6E6] p-3 rounded-md">
                        {service.time}
                      </span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {/* NAME */}
                      <div className="">
                        <input
                          className="w-full border-2 text-[#8d8a8a] border-[#CFCFCF] p-3 rounded-md focus-visible:outline-none"
                          type="text"
                          placeholder="Full Name"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span className="text-red-600">Name is required</span>
                        )}
                      </div>
                      {/* PHONE NUMBER */}
                      <div className="">
                        <input
                          className="w-full border-2 text-[#8d8a8a] border-[#CFCFCF] p-3 rounded-md focus-visible:outline-none"
                          type="number"
                          placeholder="Enter Phone Number"
                          {...register("number", { required: true })}
                        />
                        {errors.number && (
                          <span className="text-red-600">
                            Phone Number is required
                          </span>
                        )}
                      </div>
                      {/* EMAIL */}
                      <div className="">
                        <input
                          className="w-full border-2 text-[#8d8a8a] border-[#CFCFCF] p-3 rounded-md focus-visible:outline-none"
                          type="email"
                          placeholder="Enter Email"
                          {...register("email", { required: true })}
                        />
                        {errors.email && (
                          <span className="text-red-600">
                            Email is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="bg-[#07332F] w-full md:py-3 text-white font-semibold md:text-xl md:my-3 my-2 md:mt-5 rounded-md"
                        onClick={closeModal}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
