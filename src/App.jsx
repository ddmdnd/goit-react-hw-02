import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const Reviews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [count, setCount] = useState(() => {
    // window.localStorage.removeItem("saveCount");
    const localCount = window.localStorage.getItem("saveCount");
    console.log(JSON.parse(localCount));
    if (JSON.parse(localCount) != null) {
      return JSON.parse(localCount);
    }
    return Reviews;
  });
  console.log({ count });
  useEffect(() => {
    window.localStorage.setItem("saveCount", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <div>
        <Description />
        <Options clickReviews={count} setCount={setCount} />
        <Feedback typesReviews={count} />
      </div>
    </>
  );
}

export default App;
