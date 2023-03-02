import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

import "./Products.scss";

export default function Products() {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);
    const [selectedSubCat, setSelectedSubCat] = useState([]);

    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

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
                    {data?.map(item => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(event) => setMaxPrice(event.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" name="price" id="newest" value="newest" onClick={() => setSort("newest")}/>
                        <label htmlFor="newest">Newest</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="lowest" value="lowest" onClick={() => setSort("lowest")}/>
                        <label htmlFor="lowest">Lowest price</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" name="price" id="highest" value="highest" onClick={() => setSort("highest")}/>
                        <label htmlFor="highest">Highest price</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="catImg" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCat}/>
            </div>
        </div>
    )
}