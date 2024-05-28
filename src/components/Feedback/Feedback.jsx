import React from "react";

const Feedback = ({ typesReviews, totalFB, totalFeFBPercentage }) => {
  return (
    <div>
      <p>
        Good:<span>{typesReviews.good}</span>
      </p>
      <p>
        Neutral:<span>{typesReviews.neutral}</span>
      </p>
      <p>
        Bad:<span>{typesReviews.bad}</span>
      </p>
      <p>
        Total:<span>{totalFB}</span>
      </p>
      <p>
        Positive:<span>{totalFeFBPercentage}%</span>
      </p>
    </div>
  );
};

export default Feedback;
