import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

import "./FeaturedProducts.scss";

export default function FeaturedProducts({type}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, {
                    headers: {Authorization: "bearer " + process.env.REACT_APP_API_KEY}
                })
                setData(res.data.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

    return (
        <div className="featured-products">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}