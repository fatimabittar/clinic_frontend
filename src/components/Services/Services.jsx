import React from "react";
import "../../styles/Services.css";
// import { Whatsup }from "../whatsapp/whatsapp";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import kidlogo from "../../images/kid.png";



export const Services = () => {
  return (
    (<Header />),
    (<Footer />),
    (
      <div>
        <section className="Services-sec1">
          <div className="service-div1">
            <div className="teeth-service">
              <h1>
                Your <strong>Teeth </strong>
                <br />
                are in good hands
              </h1>
            </div>
            <h5>
              We Are newsly opened centre of dental clinic in the middle of down
              town
            </h5>
            <div className="Book-dev1">
              <button>Book Now</button>
            </div>
          </div>
          <div className="service-div2">
            <img src={kidlogo} alt="kid" className="kidpng" />
          </div>
        </section>
        <section className="Services-sec2">
          <div className="service-div3">
            <h1>
              <strong>OUR</strong> Services
            </h1>
            <h5>
              Care for Quality. We deliver the finest dental care and latest
              digital technology{" "}
            </h5>
          </div>
          <div className="expanding-dashboard">
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
        </section>
        
      </div>
    )
  );
};
