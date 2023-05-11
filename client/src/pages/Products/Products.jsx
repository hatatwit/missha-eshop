import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

import "./Products.scss";

export default function Products() {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState("desc");
    const [selectedSubCat, setSelectedSubCat] = useState([]);

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
    const cat = useFetch(`/categories/${catId}?populate=*`);

    console.log(data);

    const handleChange = (e) => {
      const value = e.target.value;
      const isChecked = e.target.checked;

      setSelectedSubCat(
        isChecked
          ? [...selectedSubCat, value]
          : selectedSubCat.filter((item) => item !== value)
      );
    };

    return (
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map((item) => (
              <div className="inputItem" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  value={item.id}
                  onChange={handleChange}
                />
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input
                type="range"
                min={0}
                max={1000}
                onChange={(event) => setMaxPrice(event.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                name="price"
                id="lowest"
                value="lowest"
                onClick={() => setSort("asc")}
              />
              <label htmlFor="lowest">Lowest price</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                name="price"
                id="highest"
                value="highest"
                onClick={() => setSort("desc")}
              />
              <label htmlFor="highest">Highest price</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src={process.env.REACT_APP_API_UPLOAD_URL + cat?.data?.attributes?.img?.data?.attributes?.url}
            alt={cat?.data?.attributes?.img?.data?.attributes?.name}
            className="catImg"
          />
          <h1 className="cat-title">{cat?.data?.attributes?.title}</h1>
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCat={selectedSubCat}
            isCat={true}
          />
        </div>
      </div>
    );
}