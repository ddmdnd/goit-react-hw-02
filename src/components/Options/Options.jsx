import React from "react";

const Options = ({ clickReviews, totalFeedback }) => {
  const reset = () => {
    if (totalFeedback != 0) {
      return <button onClick={() => clickReviews("reset")}>Reset</button>;
    }
  };
  return (
    <div>
      <button onClick={() => clickReviews("good")}>Good</button>
      <button onClick={() => clickReviews("neutral")}>Neutral</button>
      <button onClick={() => clickReviews("bad")}>Bad</button>
      {reset()}
    </div>
  );
};

export default Options;
