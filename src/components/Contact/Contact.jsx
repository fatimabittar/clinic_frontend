import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "../../styles/Contact.css";
// import calldoctor from "../../images/calldoctor.jpeg";
import chatus from "../../images/chatus.png";
import callus from "../../images/callus.png";
import visitus from "../../images/visitus.png";
import { Whatsup } from "../whatsapp/whatsapp";
// import clinicjpg from "../../images/clinic.jpg";

export const Contact = () => {
  return (
    (<Header />),
    (<Footer />),
    (
      <section className="contactus-sec1">
        <div className="clinic">
          <div className="middlenav"></div>
          <div className="middlectc">
            <div className="card">
              <h2>
                Contact Us
                <br />
                we are always available for you
              </h2>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    {/* <label>First Name</label> */}
                    <input type="text" placeholder="First Name" />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    {/* <label>Surname</label> */}
                    <input type="text" placeholder="Surname" />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    {/* <label>Email</label> */}
                    <input type="text" placeholder="Email" />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group">
                    {/* <label>Phone</label> */}
                    <input type="text" placeholder="Phone Number" />
                  </div>
                </div>

                <div className="col">
                  <div className="form-group-message">
                    {/* <label>Message</label> */}
                    <textarea placeholder="Enter your message"></textarea>
                  </div>
                </div>

                <div className="col">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </div>
          </div>
          {/* <img src={clinicjpg} alt="clinic" className="clinicjpg"/> */}

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
                <h5>
                  don't waste time , feel free to call us our doctors ready for
                  you{" "}
                </h5>
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
        </div>

       

                <div className="dctorcall">

                </div>

      
        <div className="bordermid">
        <div className="Map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26496.124608916696!2d35.48677272141671!3d33.88925268661702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1674946163797!5m2!1sen!2slb"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
                </div></div>
        <Whatsup />
      </section>
    )
  );
};
