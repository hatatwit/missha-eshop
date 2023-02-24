import { 
    Search, 
    PersonOutlineOutlined, 
    FavoriteBorderOutlined, 
    ShoppingCartOutlined 
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import MisshaLogo from "../../assets/favicon.png";

import "./Navbar.scss";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left-navbar">
                    <div className="item">
                        <Link to="/products/0">New</Link>
                    </div>
                    <div className="item">
                        <Link to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link to="/products/2">Men</Link>
                    </div>
                </div>
                <div className="center-navbar">
                    <Link to="/">
                        <img src={MisshaLogo} alt="missha-logo" />
                    </Link>
                </div>
                <div className="right-navbar">
                    <div className="item">
                        <Link to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link to="/">Contact</Link>
                    </div>
                    <div className="icons">
                        <Search/>
                        <PersonOutlineOutlined/> 
                        <FavoriteBorderOutlined/>
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlined/> 
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}