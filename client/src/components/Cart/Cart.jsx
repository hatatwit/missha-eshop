import { DeleteOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { decrement } from "../../utils/redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import "./Cart.scss";

export default function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      <h1>Your Bag</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
         <img
            src={process.env.REACT_APP_API_UPLOAD_URL + item.img}
            alt={item.title}
          />
          <div className="details">
            <h1>{item.title}</h1>
            <p>Size: {item.size}</p>
            <p>
              Qty: {item.quantity} x ${item.price}
            </p>
          </div>
          <DeleteOutlined
            className="deleteIcon"
            onClick={() => dispatch(decrement(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>CONTINUE TO CHECKOUT</button>
    </div>
  );
};

