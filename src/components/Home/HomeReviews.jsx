import React from "react";
import { useEffect, useState} from "react";
import { getReviews } from "../../api/reviews.api";
import { ReviewCard } from "../Reviews/ReviewCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const HomeReviews = () => {
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
    <div className="home-review">
      <button
        className={startIndex === 0 ? "arrow hidden" : "arrow"}
        onClick={() => setStartIndex(startIndex - 1)}
      >
        <AiOutlineArrowLeft className="arrow-icon" />
      </button>
      {reviews.length > 0 ? (
        reviews
          .slice(startIndex, startIndex + 3)
          .map((review, index, all) => (
            <ReviewCard
              id={all.length + index}
              name={review.name}
              message={review.message}
              logo={review.logo}
            />
          ))
      ) : (
        <div>No reviews</div>
      )}

      <button
        className={startIndex + 4 > reviews.length ? "arrow hidden" : "arrow"}
        onClick={() => setStartIndex(startIndex + 1)}
      >
        <AiOutlineArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};
