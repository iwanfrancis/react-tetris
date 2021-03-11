import React from "react";

import styles from "./Grid.module.scss";
import GridSquare from "./GridSquare/GridSquare";
import GridState from "../../types/GridState";

type GridProps = {
  gridState: GridState;
};

const Grid = ({ gridState }: GridProps) => {
  const squares = gridState
    .flat()
    .map((square, index) => <GridSquare key={index} state={square} />);

  return <div className={styles.Container}>{squares}</div>;
};

export default Grid;
