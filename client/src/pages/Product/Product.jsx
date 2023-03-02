import {
  AddShoppingCart,
  BalanceOutlined,
  FavoriteBorder,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { increment } from "../../utils/redux/cartReducer";

import "./Product.scss";

export default function Product() {
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState(null);
  const productId = useParams().id;
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `/products/${productId}?populate=*`
  );

  return (
    <div className="product">
      {error ? (
        "Something went wrong!"
      ) : loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_API_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_API_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_API_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="size">
              <h2>
                SIZE <span>{size}</span>
              </h2>
              <div className="sizeBtn">
                <button onClick={() => setSize("X Small")}>X Small</button>
                <button onClick={() => setSize("Small")}>Small</button>
                <button onClick={() => setSize("Medium")}>Medium</button>
                <button onClick={() => setSize("Large")}>Large</button>
                <button onClick={() => setSize("X Large")}>X Large</button>
              </div>
            </div>
            <button className="add" onClick={() => dispatch(increment({
              id: data.id,
              title: data.attributes.title,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity,
              size
            }))}>
              <AddShoppingCart />
              ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorder /> ADD TO WISH
              </div>
              <div className="item">
                <BalanceOutlined /> COMPARE
              </div>
            </div>
            <hr />
            <div className="info">
              <span>PRODUCT DETAILS</span>
              <p>{data?.attributes?.desc}</p>
              <span>Tags: T-shirt, Men, Tops</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
