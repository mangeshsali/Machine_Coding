import { useState } from "react";

export default function App() {
  const [rating, setRating] = useState();

  return (
    <div className="App">
      <div className="main">
        {[1, 2, 3, 4, 5].map((ele, index) => {
          return (
            <div
              className={rating > index ? "Star-light" : "Star"}
              key={index}
              onClick={() => setRating(ele)}
              onMouseOver={() => setRating(ele)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
