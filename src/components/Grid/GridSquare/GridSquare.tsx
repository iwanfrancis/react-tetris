import styles from "./GridSquare.module.scss";
import tetrominoStyles from "../../../styles/Tetrominos.module.scss";
import GridSquareState from "../../../types/GridSquareState";

type GridSquareProps = {
  state: GridSquareState;
};

const GridSquare = ({ state }: GridSquareProps) => {
  const squareClass = state === null ? styles.Empty : tetrominoStyles[state];

  return <div className={squareClass}></div>;
};

export default GridSquare;
