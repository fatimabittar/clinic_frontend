import React from "react";
import "../../styles/Footer.css";
import logo from "../../images/logo.png";


export const Footer = () => {
  return (
   
    <footer>
      <img src={logo} alt="logo" className="logofooter" />
      <div className="footer-bar-sec1">
        <strong>Dental solution </strong>is a well-known name in Facebook Career
        dental and oral care in Beirut .<hr />
      </div>

      <div className="footer-bar-sec2">
        <strong>Important Link</strong>
        <ol></ol>
        <li><a href="www.facebook.com">Facebook</a></li>
        <li><a href="www.Support.com">Support</a></li>
        <li><a href="www.twitter.com">Twitter</a></li>
        <li><a href="www.Career.com">Career</a></li>
        <li><a href="www.Instagram.com">Instagram</a></li>
        <li><a href="www.privacy.com">Privacy Policy</a></li>
        <hr />
      </div>

      <div className="footer-bar-sec3">
        {" "}
        <strong>We are welcoming you</strong><br /><h1>want to visit our clinic</h1><br />Monday - Friday
10 am- 9 pm
        <hr />
      </div>
         <div className="Visit"><strong>Check Our <br /><h1>Location</h1></strong></div>
      <div className="footer-bar-sec4">
   
        <div className="Map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26496.124608916696!2d35.48677272141671!3d33.88925268661702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1674946163797!5m2!1sen!2slb"
            width="580"
            height="230"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          </div>

      </div>
      <div>
        
      </div>
    </footer>
  );
};
