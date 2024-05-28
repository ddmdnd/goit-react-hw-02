import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const Reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [count, setCount] = useState(() => {
    const localCount = window.localStorage.getItem("saveCount");
    if (JSON.parse(localCount) != null) {
      return JSON.parse(localCount);
    }
    return Reviews;
  });
  useEffect(() => {
    window.localStorage.setItem("saveCount", JSON.stringify(count));
  }, [count]);
  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setCount(Reviews);
    } else {
      setCount((prevCount) => ({
        ...prevCount,
        [feedbackType]: prevCount[feedbackType] + 1,
      }));
    }
  };
  const totalFeedback = count.good + count.neutral + count.bad;
  const renderContent = () => {
    if (totalFeedback === 0) {
      return <Notification />;
    }
    return <Feedback typesReviews={count} />;
  };

  return (
    <>
      <div>
        <Description />
        <Options clickReviews={updateFeedback} totalFeedback={totalFeedback} />
        {renderContent()}
      </div>
    </>
  );
}

export default App;
