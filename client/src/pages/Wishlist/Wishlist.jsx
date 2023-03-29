import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import { NotInterestedOutlined, ClearAllOutlined } from "@mui/icons-material";
import Card from "../../components/Card/Card";

import "./styles.scss";


export default function Wishlist() {
  const {jwt, setJwt} = useContext(UserContext); 
  const [wishlist, setWishlist] = useState();
  const [data, setData] = useState();

  // Fetches the user's wishlist using the user's JWT token as authentication.
  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await axios.get(
        `http://localhost:1337/api/wishlists?populate=*&[filters][users_permissions_user][username][$eq]=${jwt.user.username}`,
        {
          headers: {
            Authorization: "bearer " + jwt,
          },
        }
      );

      // Update the wishlist state using the fetched data if it is not empty and an array, otherwise it sets the wishlist state to an empty array.
      if (response.data.data.length === 0) {
        setWishlist(null);
      } else {
        setWishlist(response.data.data[0].attributes.products.data);
      }
    };
    fetchWishlist();
  }, [jwt]);


  // Fetches the full product details for each item in the user's wishlist, using the product IDs in the wishlist array as query parameters.
  useEffect(() => {
    if (wishlist) {
      const fetchProductDetails = async () => {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + `/products?populate=*${wishlist
            .map((item) => `&[filters][id][$eq]=${item.id}`)
            .join("")}`,
          {
            headers: {
              Authorization: "bearer " + jwt,
            },
          }
        );
        setData(response.data.data);
      };

      fetchProductDetails();
    } else {
      setData(null);
    }
  }, [wishlist]);



  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      <div className="wishlist">
        {data
        ? data.map((item) => <Card item={item} key={item.id} />)
        : <p>Empty</p>}
      </div>
      {/* <NotInterestedOutlined /> Remove
      <ClearAllOutlined /> Reset */}
    </div>
  );
}
