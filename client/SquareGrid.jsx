import React from "react";
import Row from "./Row.jsx";

const SquareGrid = props => {
  console.log(props);
  let rows = [];
  for (let i = 5; i >= 0; i--) {
    rows.push(
      <Row
        key={i}
        row={i}
        cells={props.cells[i]}
        onClickHandler={props.onClickHandler.bind(this)}
      />
    );
  }
  console.log(rows)
  return <div>{rows}</div>;
};

export default SquareGrid;
