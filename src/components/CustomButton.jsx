import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";
import { AiOutlineHighlight } from "react-icons/ai";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title === "Customize It" ? <AiOutlineHighlight size="1.3em" /> : null}{" "}
      {title}
    </button>
  );
};

export default CustomButton;
