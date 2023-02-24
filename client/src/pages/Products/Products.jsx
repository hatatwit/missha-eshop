import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

import "./Products.scss";

export default function Products() {

    const catId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Dresses</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">Tops</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Jacket & Coats</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="4" value={4} />
                        <label htmlFor="4">Pants</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="5" value={5} />
                        <label htmlFor="5">Shoes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="6" value={6} />
                        <label htmlFor="6">Accessories</label>
                    </div>
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
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    )
}