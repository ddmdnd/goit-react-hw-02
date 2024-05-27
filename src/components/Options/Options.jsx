import React from "react";
import Feedback from "../Feedback/Feedback";

const Options = ({ clickReviews, setCount }) => {
  const counterOptions = (click, value) => {
    setCount({ ...clickReviews, [value]: click + 1 });
  };
  const resetOptions = () => {
    setCount({ good: 0, neutral: 0, bad: 0 });
    return (<Options />), (<Feedback />);
  };
  if (
    clickReviews.good === 0 &&
    clickReviews.neutral === 0 &&
    clickReviews.bad === 0
  ) {
    return (
      <div>
        <button
          onClick={() => counterOptions(clickReviews.good, "good")}
          value="good">
          Good
        </button>
        <button onClick={() => counterOptions(clickReviews.neutral, "neutral")}>
          Neutral
        </button>
        <button onClick={() => counterOptions(clickReviews.bad, "bad")}>
          Bad
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => counterOptions(clickReviews.good, "good")}
        value="good">
        Good
      </button>
      <button onClick={() => counterOptions(clickReviews.neutral, "neutral")}>
        Neutral
      </button>
      <button onClick={() => counterOptions(clickReviews.bad, "bad")}>
        Bad
      </button>
      <button onClick={() => resetOptions()}>Reset</button>
    </div>
  );
};

export default Options;
