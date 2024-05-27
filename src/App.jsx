import { useState } from "react";
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
  const [count, setCount] = useState(Reviews);
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", count);
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
