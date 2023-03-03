import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { CloseOutlined } from "@mui/icons-material";

import "./SearchBar.scss";

export default function SearchBar({ onClose }) {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFetch(`/products?populate=*`);

  return (
    <div className="search-bar">
      <CloseOutlined className="closeIcon" onClick={onClose} />
      <label className="search-label">Search</label>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        className="search-field"
        onChange={(event) => setSearch(event.target.value.toLowerCase())}
      />
      <div className="search-suggestions">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => {
              const filter = JSON.stringify(
                item?.attributes?.title
              ).toLowerCase();
              if (filter.includes(search)) {
                return (
                  <div className="item" key={item.id}>
                    
                      <img
                        src={
                          process.env.REACT_APP_API_UPLOAD_URL +
                          item.attributes?.img?.data.attributes.url
                        }
                        alt={item.attributes?.title}
                      />
                      <div className="details">
                        <h1><Link
                      to={`/product/${item.id}`}
                      className="col"
                      onClick={onClose}
                    >{item.attributes?.title}</Link></h1>
                        <p>${item.attributes?.price}</p>
                      </div>
                  </div>
                );
              }
            })}
      </div>
    </div>
  );
}
