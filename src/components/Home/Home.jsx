import React from "react";
import "../../styles/Home.css";
import thinkdr from "../../images/thinkdr.png"

export const Home = () => {
  return <div className="home-page">
    <section className="home-first">
      <div>
      <h1 className="bigger-text">We Provide High<br/>Quality<span className="yellow"> Dental</span> Services</h1>
        <br/><p className="gray"> Appropriately embrace transparent materials via<br/> turnkey niche markets.</p>
        <section className="two-buttons">
      <div>
        <button className="primary-button">Get Started</button>
      </div>
      <div>
      <button className="secondary-button">Learn More</button>
      </div>
        </section>
      </div>
      <div className="think">
        <img src={thinkdr} alt="thinkdr" className="thinkdr"/>
      </div>
    </section>
  </div>;
};
