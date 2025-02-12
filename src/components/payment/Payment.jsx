import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async () => {
    if (!stripe || !elements) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Payment successful!", paymentMethod);
      // Here you can send payment details to your backend
    } else {
      console.error(error);
    }
  };

  return (
    <div>
      <CardElement />
      <button onClick={handlePayment} disabled={!stripe}>
        Start Payment
      </button>
    </div>
  );
};

const Payment = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Payment;
