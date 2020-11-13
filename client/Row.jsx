import React from "react";
import Cell from "./Cell.jsx";

const Row = props => {
  let style = {
    display: "flex"
  };
  let cells = [];
  for (let i = 0; i < 7; i++) {
    cells.push(
      <Cell
        key={i}
        cell={props.cells[i]}
        row={props.row}
        col={i}
        onClickHandler={props.onClickHandler.bind(this)}
      />
    );
  }
  return <div style={style}> {cells} </div>;
};

export default Row;
