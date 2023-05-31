import { useState } from "react";
import { useParams } from "react-router-dom";
import {TuneOutlined, CloseOutlined} from '@mui/icons-material';
import List from "../../components/List/List";
import CollapsibleSection from "../../components/CollapsableSection/CollapsibleSection";
import useFetch from "../../hooks/useFetch";

import "./Products.scss";

export default function SubCategory() {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("desc");
  const [selectedSubCat, setSelectedSubCat] = useState([]);
  const [showFilters, setShowFilters] = useState(false);


  const { data, loading, error } = useFetch(
    `sub-categories/${catId}?populate=*`
  );

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
        <div className="desktop-filters">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.attributes?.categories?.data?.map((item) => (
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
      <div className="mobile-filters">
        <img
          src={
            process.env.REACT_APP_API_UPLOAD_URL +
            data?.attributes?.img?.data?.attributes?.url
          }
          alt={data?.attributes?.img?.data?.attributes?.name}
          className="catImg"
        />
        <h1 className="cat-title">{data?.attributes?.title}</h1>

        <CollapsibleSection
              title={"Sort By"}
              content={
                <>
                  <p onClick={() => setSort("desc")}>Price: High - Low</p>
                  <p onClick={() => setSort("asc")}>Price: Low - High</p>
                </>
              }
            />
            <button onClick={() => setShowFilters(!showFilters)} className="filterBtn">
              <TuneOutlined sx={{ stroke: "#ffffff", strokeWidth: 1 }}/>
            </button>
            {showFilters && (
              <div className="filterModal">
                <div className="filter-header">
                  Filters
                  <span className="closeModel" onClick={() => setShowFilters(!showFilters)}><CloseOutlined/></span>
                </div>
                <div className="filter-body">
                  <CollapsibleSection
                    title={"Categories"}
                    content={
                      <>
                      </>
                    }
                  />
                  <CollapsibleSection
                    title={"Price"}
                    content={
                      <>
                        <span>Price Range (USD)</span>
                        <div className="inputItem">
                          <span>$0</span>
                          <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={(event) => setMaxPrice(event.target.value)}
                          />
                          <span>${maxPrice}</span>
                        </div>
                      </>
                    }
                  />
                </div>   
              </div>
            )}

      </div>



      <div className="right">
        <img
          src={
            process.env.REACT_APP_API_UPLOAD_URL +
            data?.attributes?.img?.data?.attributes?.url
          }
          alt={data?.attributes?.img?.data?.attributes?.name}
          className="catImg"
        />
        <h1 className="cat-title">{data?.attributes?.title}</h1>
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCat={selectedSubCat}
          isCat={false}
        />
      </div>
      </div>
    </div>
  );
}
