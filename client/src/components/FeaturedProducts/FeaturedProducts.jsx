import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

import "./FeaturedProducts.scss";

export default function FeaturedProducts({type}) {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    return (
      <div className="featured-products">
        <div className="top">
          <h1>{type} products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="bottom">
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    );
}