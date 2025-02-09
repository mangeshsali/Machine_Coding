import { useState, useEffect } from "react";

export default function App() {
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const switchLights = () => {
      if (currentLight === "red") {
        setCurrentLight("green");
      } else if (currentLight === "green") {
        setCurrentLight("yellow");
      } else if (currentLight === "yellow") {
        setCurrentLight("red");
      }
    };

    const timer =
      currentLight === "red"
        ? setTimeout(switchLights, 4000) // red stays on for 4 seconds
        : currentLight === "green"
        ? setTimeout(switchLights, 3000) // green stays on for 3 seconds
        : setTimeout(switchLights, 500); // yellow stays on for 0.5 seconds

    return () => clearTimeout(timer);
  }, [currentLight]);

  return (
    <div className="App">
      <div
        className={currentLight === "red" ? "red-circle" : "none-circle"}
      ></div>
      <div
        className={currentLight === "green" ? "green-circle" : "none-circle"}
      ></div>
      <div
        className={currentLight === "yellow" ? "yellow-circle" : "none-circle"}
      ></div>
    </div>
  );
}
