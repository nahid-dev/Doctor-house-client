import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const CheckOutForm = ({ appointment, closeModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxios();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transectionId, setTransectionId] = useState("");

  // console.log(appointment);

  const { name, treatment, date, time, fee, _id } = appointment;
  useEffect(() => {
    if (fee > 0) {
      axiosSecure.post("/create-payment-intent", { fee }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [fee, axiosSecure]);

  // console.log("line 27", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",

            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    // console.log(paymentIntent, "payment intent");
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransectionId(paymentIntent.id);
      const payment = {
        name: name,
        Treatment: treatment,
        time: time,
        date: date,
        transactionId: paymentIntent.id,
        id: _id,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Payment Successfully",
        });
      });
    }
    console.log(transectionId);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-5">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-block bg-[#07332F] mt-5"
          onClick={closeModal}
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 ">{cardError}</p>}
      {/* {transectionId && (
        <p className="text-green-500">Transection complete {transectionId}</p>
      )}    */}
    </>
  );
};

export default CheckOutForm;
