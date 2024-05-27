import React from "react";

const Feedback = ({ typesReviews }) => {
  const localCount = window.localStorage.getItem("saveCount");
  if (
    // !localCount
    //   тут можна зробити активним 6 рядок та в файлі APP 14 рядок, закоментувати 8-10 рядок в цьому файлі - це як інший спосіб, незнаю  як більш правильно
    typesReviews.good === 0 &&
    typesReviews.neutral === 0 &&
    typesReviews.bad === 0
  ) {
    return <p>No Feedback yet</p>;
  }
  const totalReviews =
    typesReviews.good + typesReviews.neutral + typesReviews.bad;
  const positivePercentage =
    (totalReviews - typesReviews.bad) / (totalReviews / 100);
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
        Total:<span>{totalReviews}</span>
      </p>
      <p>
        Positive:<span>{Math.round(positivePercentage)}%</span>
      </p>
    </div>
  );
};

export default Feedback;
