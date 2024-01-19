import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({ tab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles = isActiveTab
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className="tab-btn rounded-4"
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className="w-11/12 h-11/12 object-contain"
      />
    </div>
  );
};

export default Tab;
