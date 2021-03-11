import styles from "./GridSquare.module.scss";
import tetrominoStyles from "../../../styles/Tetrominos.module.scss";
import GridSquareState from "../../../types/GridSquareState";

type GridSquareProps = {
  state: GridSquareState;
};

const GridSquare = ({ state }: GridSquareProps) => {
  const colorClass = state === null ? styles.Empty : tetrominoStyles[state];

  return <div className={`${styles.Square} ${colorClass}`}></div>;
};

export default GridSquare;
