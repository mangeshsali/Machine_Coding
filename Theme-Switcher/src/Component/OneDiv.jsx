import { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const OneDiv = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div class={`container ${theme ? "container-light" : "container-dark"} `}>
      <h1>Dark & Light Theme Switcher</h1>
      <p>Click the button below to toggle between dark and light themes.</p>
    </div>
  );
};

export default OneDiv;
