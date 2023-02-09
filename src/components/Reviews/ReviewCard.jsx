import React from "react";

export const ReviewCard = ({ id, name, message,logo }) => {
  return (
    <div className="review-card" id={`review-${id}`}>
      {/* <div className="review-logo"> */}
        <img src={`data:image/jpeg;base64,${logo}`} alt="logo" className="review-logo" />
      {/* </div> */}
      <div className="review-content">
        <div className="review-name">{name}</div>
        <div className="review-message">{message}</div>
      </div>
    </div>
  );
};
