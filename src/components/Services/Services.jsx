import React from "react";
import "../../styles/Services.css";
// import logo from "../../images/logo.png";
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
            <h1>hj<br />dfhjhdsj<br /><br /><br /><br /><br />hfkjldshfksddskhfsljfdhlkfdkko</h1>
          </div>
        </section>
        
      </div>
    )
  );
};
