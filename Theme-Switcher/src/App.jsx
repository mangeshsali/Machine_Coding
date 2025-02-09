import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import OneDiv from "./Component/OneDiv";
import SecondDiv from "./Component/SecondDiv";

export default function App() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className="App">
      <button onClick={() => setTheme((prev) => !prev)}>Switch Theme</button>
      <OneDiv />
      <SecondDiv />
    </div>
  );
}
