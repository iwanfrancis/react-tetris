import { useReducer } from "react";

const initialState = {
  grid: Array(20)
    .fill(null)
    .map((x) => Array(10).fill(null)),
  activeLocation: { row: 0, col: 4 },
};

type ACTION =
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  | { type: "MOVE_DOWN" }
  | { type: "ROTATE" };

const gridReducer = (grid: typeof initialState, action: ACTION) => {
  switch (action.type) {
    case "MOVE_LEFT":
      return initialState;
    case "MOVE_RIGHT":
      return initialState;
    case "MOVE_DOWN":
      return initialState;
    case "ROTATE":
      return initialState;
    default:
      return initialState;
  }
};

const useTetrisGrid = () => {
  const [state, dispatch] = useReducer(gridReducer, initialState);

  return {
    grid: state.grid,
  };
};

export default useTetrisGrid;
