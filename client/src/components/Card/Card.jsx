import { Link } from "react-router-dom";

import "./Card.scss";

export default function Card({item}) {
    return (
        <Link to={`/product/${item.id}`} className="link">
            <div className="card">
                <div className="image">
                    {item?.attributes.isNew && <span>New</span>}
                    <img src={process.env.REACT_APP_API_UPLOAD_URL + item.attributes?.img?.data.attributes.url} alt="" className="mainImg" />
                    <img src={process.env.REACT_APP_API_UPLOAD_URL + item.attributes?.img2?.data.attributes.url} alt="" className="secondImg" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <div className="prices">
                    <h3>${item?.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

