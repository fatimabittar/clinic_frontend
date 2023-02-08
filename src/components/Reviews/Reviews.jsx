import React from "react";
import "../../styles/Reviews.css";
import ReviewsHeader from "../../images/ReviewsHeader.png";
import { Button } from "../Buttons/Button";
import { ReviewComp } from "./ReviewComp";


export const Reviews = () => {
  return (
    <>
      <div className="reviews-page">
        <img
          className="Reviews_Header_img"
          src={ReviewsHeader}
          alt="ReviewsHeader"
        />
        <Button />
      </div>
      <div className="reviews-title">
        <h2 className="Hone_Reviews">
          Check Out </h2>
          <h1 className="Big_Font_Reviews">
            <span className="yellow">
              Recent </span>Reviews 
          </h1>
      </div>
      <section className="reviews-part">

        <ReviewComp/>

      </section>
    </>
  );
};
