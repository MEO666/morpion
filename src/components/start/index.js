import React, { useContext } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className="start">
      <div className="card shadow-gray">
        <h1 className="text-lg">Choose X or O</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
        </div>
        <div className="start__players">
        <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light text-normal"></p>
      </div>
      <div className="start__btns">
        <button className="btn btn-white" onClick={() => handleStart("cpu")}>
          vs Computer
        </button>
        <button className="btn btn-reed" onClick={() => handleStart("user")}>
          {" "}
          vs Player
        </button>
      </div>
    </div>
  );
};

export default Start;
