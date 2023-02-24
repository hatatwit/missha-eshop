import { AddShoppingCart, BalanceOutlined, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";

import "./Product.scss";

export default function Product() {
    
    const images = [
        "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1627225793904-a2f900a6e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ]

    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState(null);

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={() => setSelectedImg(0)}/>
                    <img src={images[1]} alt="" onClick={() => setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Short Sleeve Graphic T-shirt</h1>
                <span className="price">$19</span>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 1 ? 1 : (prev-1))}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <div className="size">
                    <h2>SIZE <span>{size}</span></h2>
                    <div className="sizeBtn">
                        <button onClick={() => setSize("X Small")}>X Small</button>
                        <button onClick={() => setSize("Small")}>Small</button>
                        <button onClick={() => setSize("Medium")}>Medium</button>
                        <button onClick={() => setSize("Large")}>Large</button>
                        <button onClick={() => setSize("X Large")}>X Large</button>
                    </div>
                </div>
                <button className="add"><AddShoppingCart/>ADD TO CART</button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorder/> ADD TO WISH 
                    </div>
                    <div className="item">
                        <BalanceOutlined/> COMPARE
                    </div>
                </div>
                <hr/>
                <div className="info">
                    <span>PRODUCT DETAILS</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <span>Tags: T-shirt, Men, Tops</span>
                </div>
            </div>
        </div>
    )
}