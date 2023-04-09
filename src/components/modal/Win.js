import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Win = () => {
  const { winner, handleNextRound, handleReset } = useContext(GameContext);
  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <h3
            className={`score__title ${
              winner === "o" ? "text-white" : "text-white"
            } `}
          > 
            {winner === "x" && <Xicon />}
            {winner === "o" && <Oicon />}
            Win
          </h3>
        </>
      ) : (
        <h3 className="score__title text-white">No Winner !</h3>
      )}
      <div className="score__btns">
        <button className="btn btn-red" onClick={handleReset}>
          Exit
        </button>
        <button
          className={`btn   btn-sm ${
            winner === "x" ? "btn-sm" : "btn-white"
          }`}
          onClick={handleNextRound}
        >
          Next Round
        </button>
      </div>
    </div>
  );
};

export default Win;
