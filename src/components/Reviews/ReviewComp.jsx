import React from "react";
import { useEffect, useState } from "react";
import { getReviews } from "../../api/reviews.api";
import { ReviewCard } from "../Reviews/ReviewCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const ReviewComp = () => {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const fetchData = () => {
    getReviews()
      .then(({ data }) => {
        setReviews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(
    () => fetchData(),
    // call on first render only - no dependencies
    []
  );

  return (
    <div className="review-review">
      <button
        className={startIndex === 0 ? "arrow hidden" : "arrow-visible"}
        onClick={() => setStartIndex(startIndex - 1)}
      >
        <AiOutlineArrowLeft className="arrow-icon" />
      </button>
      <div className="comp-review">
        {reviews.length > 0 ? (
          reviews
            .slice(startIndex, startIndex + 6)
            .map((review, index, all) => (
              <ReviewCard
                className="review-comp-card"
                id={all.length + index}
                name={review.name}
                message={review.message}
                logo={review.logo}
              />
            ))
        ) : (
          <div>No reviews</div>
        )}
      </div>
      <button
        className={startIndex + 4 > reviews.length ? "arrow hidden" : "arrow"}
        onClick={() => setStartIndex(startIndex + 1)}
      >
        <AiOutlineArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};
