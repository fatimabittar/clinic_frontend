import React from "react";
import "../../styles/Footer.css";
import insta from "../../images/instagram.png";
import faceb from "../../images/facebook.png";
import twit from "../../images/twitter.png";
import yout from "../../images/youtube.png";
import { Whatsup } from "../whatsapp/whatsapp";
export const Footer = () => {
  return (
    <footer className="footerpage">
              <Whatsup />
      <div class="main">
        <div class="logo row">
          <div class="footer-header">
            <img
              // src={twit}
              class="Debtal-Solution"
              alt=""
            />
          </div>
          <div class="logo-des">
            <p>
              Established in 1977 | Newest technologies in Dentistry | 3D
              digital impressions. 20 years warranty on dental implants | 10
              years warranty of ceramic crowns.
            </p>

            <a href="www.Debtalsolution.com" class="btn-know">
              Know More
            </a>
          </div>
        </div>

        <div class="office-row">
          <div class="footer-header">
            <h3>Office</h3>
          </div>
          <div class="office-des">
            <p>Now we have 6 branches for our dentist in all lebanon</p>

            <a href="www.google.com">Solution-Dentist@gmail.com</a>

            <p class="num">+961-03643397</p>
          </div>
        </div>

        <div class="link row">
          <div class="footer-header">
            <h2>Links</h2>
          </div>

          <div class="link-des">
            <ul>
              <a href="www.twitter.com" class="footer-links">
                <img src={twit} alt="twitter" className="icomedia"></img>
                {/* Home */}
              </a>
              <a href="www.google.com" class="footer-links">
                <img src={yout} alt="youtube" className="icomedia"></img>
                {/* About */}
              </a>
              <a href="www.google.com" class="footer-links">
                <img src={insta} alt="instagram" className="icomedia"></img>
                {/* Services */}
              </a>
              <a href="www.google.com" class="footer-links">
                <img src={faceb} alt="facebook" className="icomedia"></img>
                {/* Galary */}
              </a>
              {/* <a href="www.google.com" class="footer-links">
              Contact
            </a> */}
            </ul>
          </div>
        </div>

        <div class="newsletter row">
          <div class="footer-header">
            <h3 className="branchb">Our Beirut Branch</h3>
          </div>

          <div className="Mapi">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26496.124608916696!2d35.48677272141671!3d33.88925268661702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1674946163797!5m2!1sen!2slb"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        
        </div>
    
      </div>
    </footer>
  );
};
