import Tetromino from "../enums/Tetromino";

export type TetrominoShape = Array<Array<Array<Tetromino | null>>>;

const I = [
  [
    [null, null, null, null],
    [Tetromino.I, Tetromino.I, Tetromino.I, Tetromino.I],
    [null, null, null, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.I, null, null],
    [null, Tetromino.I, null, null],
    [null, Tetromino.I, null, null],
    [null, Tetromino.I, null, null],
  ],
];

const O = [
  [
    [null, null, null, null],
    [null, Tetromino.O, Tetromino.O, null],
    [null, Tetromino.O, Tetromino.O, null],
    [null, null, null, null],
  ],
];

const T = [
  [
    [null, null, null, null],
    [Tetromino.T, Tetromino.T, Tetromino.T, null],
    [null, Tetromino.T, null, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.T, null, null],
    [Tetromino.T, Tetromino.T, null, null],
    [null, Tetromino.T, null, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.T, null, null],
    [Tetromino.T, Tetromino.T, Tetromino.T, null],
    [null, null, null, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.T, null, null],
    [null, Tetromino.T, Tetromino.T, null],
    [null, Tetromino.T, null, null],
    [null, null, null, null],
  ],
];

const S = [
  [
    [null, null, null, null],
    [null, Tetromino.S, Tetromino.S, null],
    [Tetromino.S, Tetromino.S, null, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.S, null, null],
    [null, Tetromino.T, Tetromino.S, null],
    [null, null, Tetromino.S, null],
    [null, null, null, null],
  ],
];

const Z = [
  [
    [null, null, null, null],
    [Tetromino.Z, Tetromino.Z, null, null],
    [null, Tetromino.Z, Tetromino.Z, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.Z, null, null],
    [Tetromino.Z, Tetromino.Z, null, null],
    [Tetromino.Z, null, null, null],
    [null, null, null, null],
  ],
];

const J = [
  [
    [null, null, null, null],
    [Tetromino.J, Tetromino.J, Tetromino.J, null],
    [null, null, Tetromino.J, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.J, null, null],
    [null, Tetromino.J, null, null],
    [Tetromino.J, Tetromino.J, null, null],
    [null, null, null, null],
  ],
  [
    [Tetromino.J, null, null, null],
    [Tetromino.J, Tetromino.J, Tetromino.J, null],
    [null, null, null, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.J, Tetromino.J, null],
    [null, Tetromino.J, null, null],
    [null, Tetromino.J, null, null],
    [null, null, null, null],
  ],
];

const L = [
  [
    [null, null, null, null],
    [Tetromino.L, Tetromino.L, Tetromino.L, null],
    [Tetromino.L, null, null, null],
    [null, null, null, null],
  ],
  [
    [Tetromino.L, Tetromino.L, null, null],
    [null, Tetromino.L, null, null],
    [null, Tetromino.L, null, null],
    [null, null, null, null],
  ],
  [
    [null, null, Tetromino.L, null],
    [Tetromino.L, Tetromino.L, Tetromino.L, null],
    [null, null, null, null],
    [null, null, null, null],
  ],
  [
    [null, Tetromino.L, null, null],
    [null, Tetromino.L, null, null],
    [null, Tetromino.L, Tetromino.L, null],
    [null, null, null, null],
  ],
];

export const Tetrominos = [I, O, T, S, Z, J, L];
