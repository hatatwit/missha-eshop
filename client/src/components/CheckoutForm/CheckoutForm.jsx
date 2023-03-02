import { PaymentElement, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
        return;
    }

    const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({amount: 10000})
    }).then(res => res.json());

    console.log(response);

    
  };
  return (
    <form>
      <PaymentElement />
      <button onSubmit={handlePayment}>Submit</button>
    </form>
  );
}
