import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "../../styles/Contact.css";
import contactus from "../../images/contactus.jpg";
import chatus from "../../images/chatus.png";
import callus from "../../images/callus.png";
import visitus from "../../images/visitus.png";

export const Contact = () => {
  return (
    (<Header />),
    (<Footer />),
    (
      <section className="contactus-sec1">
        <div className="middlenav">
          <img src={contactus} alt="contactus" className="contactuspng"></img>
        </div>
        <div className="rightnav">
          <div className="chatus">
            <img src={chatus} alt="chatus" className="chatuspng"></img>
            <div className="chato">
            <h1>Chat with us</h1>
            <h5>We are available 24/7 feel free to send a message</h5>
            </div>
          </div>
          <div className="callus">
            <img src={callus} alt="callus" className="calluspng"></img>
            <div className="callo">
            <h1>Call Us</h1>
            <h5>don't waste time , feel free to call us </h5>
            </div>
          </div>
          <div className="visitus">
            <img src={visitus} alt="visitus" className="visituspng"></img>
            <div className="visito">
            <h1>Visit us</h1>
            <h5>Our location is in beirut - Downtown near to azarieh .</h5>
            </div>
          </div>
        </div>
        <div className="leftnav">
          <div className="fname">
            <label>First Name</label>
            <input></input>
          </div>

          <div className="lname">
            <label>Last Name</label>
            <input></input>
          </div>

          <div className="email">
            <label>Email</label>
            <input />
          </div>
          <div className="Phone Number">
            <label>Phone Number</label>
            <input></input>
          </div>
          <div className="messagewtsp">
            <label>Message</label>
            <input className="wtsinmput"></input>
            <div className="wtspbttn">
              <button>Send Whatsapp Message</button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};
