import { GridPos, GridState } from "../types/GridTypes";
import { TetrominoShape } from "../types/Tetrominos";

export const deepCopyGrid = (grid: GridState): GridState => {
  return JSON.parse(JSON.stringify(grid));
};

export const addShape = (
  grid: GridState,
  shape: TetrominoShape,
  rotation: number,
  position: GridPos
): GridState => {
  const rowPivot = 1;
  const colPivot = 1;

  shape[rotation].forEach((row, rowNum) => {
    row.forEach((square, colNum) => {
      const mappedRowPos = position.row + rowNum - rowPivot;
      const mappedColPos = position.col + colNum - colPivot;
      if (square !== null && mappedRowPos >= 0 && mappedColPos >= 0) {
        grid[mappedRowPos][mappedColPos] = square;
      }
    });
  });

  return grid;
};

export const removeShape = (
  grid: GridState,
  shape: TetrominoShape,
  rotation: number,
  position: GridPos
): GridState => {
  const rowPivot = 1;
  const colPivot = 1;

  shape[rotation].forEach((row, rowNum) => {
    row.forEach((square, colNum) => {
      const mappedRowPos = position.row + rowNum - rowPivot;
      const mappedColPos = position.col + colNum - colPivot;
      if (square !== null && mappedRowPos >= 0 && mappedColPos >= 0) {
        grid[mappedRowPos][mappedColPos] = null;
      }
    });
  });

  return grid;
};

export const moveShape = (
  grid: GridState,
  shape: TetrominoShape,
  rotation: number,
  prevPosition: GridPos,
  newPosition: GridPos
): GridState => {
  removeShape(grid, shape, rotation, prevPosition);
  addShape(grid, shape, rotation, newPosition);

  return grid;
};
