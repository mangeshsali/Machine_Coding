import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const SecondDiv = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div class={`container ${theme ? "container-light" : "container-dark"} `}>
      <h1>Second Div </h1>
      <p>between dark and light themes.</p>
    </div>
  );
};

export default SecondDiv;
