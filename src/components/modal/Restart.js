import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import { ModalContext } from "../../context/ModalContext";

const Restart = () => {
  const { hideModal } = useContext(ModalContext);
  const { handleReset } = useContext(GameContext);
  return (
    <div className="restart">
      <h3 className="restart__title">Restart Game?</h3>
      <div className="restart__btns">
        <button className="btn btn-white" onClick={hideModal}>
          Restart
        </button>
        <button className="btn btn-reed btn-sm" onClick={handleReset}>
          Exit
        </button>
      </div>
    </div>
  );
};

export default Restart;
