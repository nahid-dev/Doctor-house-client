import { Dialog, Transition } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
import { Fragment, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

export default function PaymentModal({ appointment }) {
  let [isOpen, setIsOpen] = useState(false);
  const { name, treatment, date, time, fee } = appointment;

  //   console.log(appointment);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="py-2 px-4 text-white rounded-md bg-[#07332F]"
        >
          Pay
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
                      <span className="text-[#F7A582] text-base font-bold">
                        {" "}
                        Hello {name}
                      </span>
                      <span
                        onClick={closeModal}
                        className="bg-[#07332F] text-white rounded-full cursor-pointer"
                      >
                        <RiCloseFill size={24}></RiCloseFill>
                      </span>
                    </div>
                    <div className="md:space-y-3">
                      <h6 className="text-[#383838] font-bold text-xl">
                        Please Pay For {treatment}
                      </h6>
                      <p>
                        Your appointment:{" "}
                        <span className="text-[#F0AA22]">{date}</span> at {time}
                      </p>
                      <h6 className="text-[#383838] font-bold text-xl">
                        Please Pay ${fee}
                      </h6>
                    </div>
                    <div className="divider"></div>
                  </Dialog.Title>
                  {/* <button
                    type="button"
                    className="bg-[#07332F] w-full md:py-3 text-white font-semibold md:text-xl md:my-3 my-2 md:mt-5 rounded-md"
                    onClick={closeModal}
                  >
                    Pay
                  </button> */}
                  <Elements stripe={stripePromise}>
                    <CheckOutForm
                      appointment={appointment}
                      closeModal={closeModal}
                    ></CheckOutForm>
                  </Elements>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
