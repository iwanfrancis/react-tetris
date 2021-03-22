import { useCallback, useEffect, useReducer } from "react";
import { Tetrominos } from "../types/Tetrominos";
import { addShape, deepCopyGrid, moveShape } from "../utils/grid";

const initialState = {
  grid: Array(20)
    .fill(null)
    .map((x) => Array(10).fill(null)),
  activeShape: Tetrominos[Math.floor(Math.random() * Tetrominos.length)],
  activePosition: { row: 0, col: 4 },
  rotation: 0,
};

type ACTION =
  | { type: "PLAY" }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  | { type: "MOVE_DOWN" }
  | { type: "ROTATE" };

const gridReducer = (state: typeof initialState, action: ACTION) => {
  let newGrid = deepCopyGrid(state.grid);
  let newPosition;

  switch (action.type) {
    case "PLAY":
      newGrid = addShape(newGrid, state.activeShape, state.rotation, state.activePosition);
      return { ...state, grid: newGrid };
    case "MOVE_LEFT":
      newPosition = { row: state.activePosition.row, col: state.activePosition.col - 1 };
      newGrid = moveShape(
        newGrid,
        state.activeShape,
        state.rotation,
        state.activePosition,
        newPosition
      );
      return { ...state, grid: newGrid, activePosition: newPosition };
    case "MOVE_RIGHT":
      newPosition = { row: state.activePosition.row, col: state.activePosition.col + 1 };
      newGrid = moveShape(
        newGrid,
        state.activeShape,
        state.rotation,
        state.activePosition,
        newPosition
      );
      return { ...state, grid: newGrid, activePosition: newPosition };
    case "MOVE_DOWN":
      newPosition = { row: state.activePosition.row + 1, col: state.activePosition.col };
      newGrid = moveShape(
        newGrid,
        state.activeShape,
        state.rotation,
        state.activePosition,
        newPosition
      );
      return { ...state, grid: newGrid, activePosition: newPosition };
    case "ROTATE":
      return initialState;
    default:
      return initialState;
  }
};

const useTetrisGrid = () => {
  const [state, dispatch] = useReducer(gridReducer, initialState);

  const play = useCallback(() => {
    dispatch({ type: "PLAY" });
  }, []);

  const moveDown = useCallback(() => {
    dispatch({ type: "MOVE_DOWN" });
  }, []);

  useEffect(() => {
    const clock = setInterval(moveDown, 700);
    return () => clearInterval(clock);
  }, [moveDown]);

  return {
    grid: state.grid,
    play: play,
  };
};

export default useTetrisGrid;
