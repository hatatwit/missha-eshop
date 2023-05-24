import {
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import SearchBar from "../SearchBar/SearchBar";
import MisshaLogo from "../../assets/favicon.png";

import "./Navbar.scss";


export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const data = useSelector((state) => state.cart.products);

  const navigate = useNavigate();
  const { jwt, setJwt } = useContext(UserContext);

  return (
    <div className="navbar">
      <div className="desktop-navbar">
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
            <div
              className="searchIcon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search />
            </div>
            {jwt ? (
              <>
                <LogoutOutlined
                  onClick={() => {
                    setJwt(null);
                    navigate("/");
                  }}
                />
                <Link to="/wishlist">
                  <FavoriteBorderOutlined />
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <PersonOutlineOutlined />
              </Link>
            )}
            <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCartOutlined />
              <span>{data.length}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-navbar">
        <button className="mobile-navbar-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <CloseOutlined className="menuIcon" /> : <MenuOutlined className="menuIcon" /> }
          
        </button>
        <div className="searchIcon" onClick={() => setSearchOpen(!searchOpen)}>
          <Search />
        </div>
        <div className="logoIcon">
          <Link to="/">
            <img src={MisshaLogo} alt="missha-logo" />
          </Link>
        </div>
        <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
          <ShoppingCartOutlined />
          <span>{data.length}</span>
        </div>
        <div className={`navbar-links ${mobileMenuOpen ? "active" : "hidden"}`}>
          <Link to="/products/3"  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>New</Link>
          <Link to="/products/1"  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Women</Link>
          <Link to="/products/2"  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Men</Link>
          {jwt ? (
              <>
                <LogoutOutlined
                  onClick={() => {
                    setJwt(null);
                    navigate("/");
                    setMobileMenuOpen(!mobileMenuOpen)
                  }}
                />
                <Link to="/wishlist" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <FavoriteBorderOutlined />
                </Link>
              </>
            ) : (
              <Link to="/auth" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <PersonOutlineOutlined />
              </Link>
            )}
        </div>
      </div>

      {cartOpen && <Cart />}
      {searchOpen && <SearchBar onClose={() => setSearchOpen(!searchOpen)} />}
    </div>
  );
}
