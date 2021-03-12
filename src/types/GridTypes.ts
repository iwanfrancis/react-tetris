import Tetromino from "../enums/Tetromino";

export type GridSquareState = Tetromino | null;

export type GridState = Array<Array<GridSquareState>>;

export type GridPos = { row: number; col: number };
