import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Pinterest, 
  YouTube 
} from "@mui/icons-material";
import MisshaLogo from "../../assets/favicon.png";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">
            <img src={MisshaLogo} alt="missha-logo" />
          </span>
          <span className="copyright">
            &copy; Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
            <ul className="socialIcons">
                <li><a href="https://www.facebook.com/"><Facebook/></a></li>
                <li><a href="https://twitter.com/"><Twitter/></a></li>
                <li><a href="https://instagram.com/"><Instagram/></a></li>
                <li><a href="https://youtube.com/"><YouTube/></a></li>
                <li><a href="https://pinterest.com/"><Pinterest/></a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
