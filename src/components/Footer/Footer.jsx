import React from "react";
import "../../styles/Footer.css";
import insta from "../../images/instagram.png";
import faceb from "../../images/facebook.png";
import twit from "../../images/twitter.png";
import yout from "../../images/youtube.png";
import { Whatsup } from "../whatsapp/whatsapp";
export const Footer = () => {
  return (
    <div className="footer-page">
      <Whatsup />
      <div className="footer-main">
        <div className="footer-one">
          <p>
            Dental-Solution clinic is a well-known name in dental and oral care in Beirut.
            The journey of this institution started in 1990
          </p>
        </div>
        <div className="footer-two">
          <h3>Important Links</h3>
          <div class="link-des">
            <ul>
              <a href="www.twitter.com" class="footer-links">
                <img src={twit} alt="twitter" className="icomedia"></img>
              </a>
              <a href="www.youtube.com" class="footer-links" target="_blank">
                <img src={yout} alt="youtube" className="icomedia"></img>
              </a>
              <a href="www.instagram.com" class="footer-links" target="_blank">
                <img src={insta} alt="instagram" className="icomedia"></img>
              </a>
              <a href="www.facebook.com" class="footer-links" target="_blank">
                <img src={faceb} alt="facebook" className="icomedia"></img>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-three">
          <p>We are welcoming you</p>
          <h2>Want to visit our clinic?</h2>
          <p>Saturday - Thrusday</p>
          <p>10 am- 9 pm</p>
        </div>
        <div className="footer-four">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26496.124608916696!2d35.48677272141671!3d33.88925268661702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1674946163797!5m2!1sen!2slb"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="row-footer">
        <p>&copy;{new Date().getFullYear()}, All Rights Reserved</p>
      </div>
    </div>
  );
};