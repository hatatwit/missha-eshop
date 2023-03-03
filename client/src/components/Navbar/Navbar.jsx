import { 
    Search, 
    PersonOutlineOutlined, 
    FavoriteBorderOutlined, 
    ShoppingCartOutlined 
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import SearchBar from "../SearchBar/SearchBar";
import MisshaLogo from "../../assets/favicon.png";
import { useSelector } from "react-redux";

import "./Navbar.scss";

export default function Navbar() {
    const [cartOpen, setCartOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const data = useSelector(state => state.cart.products);

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left-navbar">
                    <div className="item">
                        <Link to="/products/3">New</Link>
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
                        <div className="searchIcon" onClick={() => setSearchOpen(!searchOpen)}>
                            <Search/> 
                        </div>
                        <PersonOutlineOutlined/> 
                        <FavoriteBorderOutlined/>
                        <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
                            <ShoppingCartOutlined/> 
                            <span>{data.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {cartOpen && <Cart/>}
            {searchOpen && <SearchBar onClose={() => setSearchOpen(!searchOpen)}/>}
        </div>
    )
}