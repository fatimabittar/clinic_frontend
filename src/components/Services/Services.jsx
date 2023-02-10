import React from "react";
import "../../styles/Services.css";
// import { Whatsup }from "../whatsapp/whatsapp";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import kidlogo from "../../images/kid.png";
import img1 from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";


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
          <section className="home-fourth">
          {/* <div className="fourthy"></div> */}
        <div className="fourthy">

          <img src={img1} alt="img1" />
          <h1>Laser Technology</h1>
          <p className="gray">
            Worlds most advanced Diode Laser.
            <br />
            Your treatment experience will be
            <br />
            relaxing & smooth.
          </p>
        </div>
        <div className="fourthy">
          <img src={img2} alt="img2" />
          <h1>Painless Injection</h1>
          <p className="gray">
            Only dental clinic in New York, USA
            <br />
            utilising Painless Injection system.
            <br />
            You will be amazed!
          </p>
        </div>
        <div className="fourthy">
          <img src={img3} alt="img3" />
          <h1>Dental Implant</h1>
          <p className="gray">
            30+ years of experience in Dental Implant
            <br />
            with specialist care. You will be able to
            <br />
            chew properly again!
          </p>
        </div>
      </section>
          </div>
        </section>
        
      </div>
    )
  );
};
