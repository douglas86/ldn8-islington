import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <p>
          <a href="https://www.facebook.com/IslingtonCentre" target="_blank">
            <FaFacebook className="facebook" />
          </a>
        </p>
        <p>
          <a href="https://twitter.com/IslingtonCentre" target="_blank">
            <FaTwitter className="twitter" />
          </a>
        </p>

        <p>
          <FaMapMarkedAlt
            style={{ marginRight: "10px" }}
            className="map-marked-alt"
          />
          16 - 18 Cross Street, London, N1 2BG
        </p>
        <p>
          <FaPhone style={{ marginRight: "10px" }} className="phone" />
          +447477657896
        </p>
      </div>
      
      <p className="copy-right">
        Copyright ©2022 All rights reserved | This website is made with{" "}
        <FaHeart className="heart" /> by Explorers.
      </p>
    </div>
  );
};

export default Footer;
