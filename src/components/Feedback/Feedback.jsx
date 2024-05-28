import React from "react";

const Feedback = ({ typesReviews }) => {
  const totalFeedback =
    typesReviews.good + typesReviews.neutral + typesReviews.bad;
  const totalFeedbeckPercentage = Math.round(
    (typesReviews.good / totalFeedback) * 100
  );

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
        Total:<span>{totalFeedback}</span>
      </p>
      <p>
        Positive:<span>{totalFeedbeckPercentage}%</span>
      </p>
    </div>
  );
};

export default Feedback;
