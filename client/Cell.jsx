import React from "react";
import Circle from "./Circle.jsx";

const Cell = ({ row, col, cell, onClickHandler }) => {
  return (
    <div className="squareGrid" onClick={() => onClickHandler(row, col)}>
      <Circle cell={cell} />
    </div>
  );
};

export default Cell;
