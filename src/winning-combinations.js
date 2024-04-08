export const WINNING_COMBINATIONS = [
    // horizontal
    [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
    [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
    [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
    // vertical
    [{ row: 0, col: 0 }, { row: 1, col: 0 }, { row: 2, col: 0 }],
    [{ row: 0, col: 1 }, { row: 1, col: 1 }, { row: 2, col: 1 }],
    [{ row: 0, col: 2 }, { row: 1, col: 2 }, { row: 2, col: 2 }],
    // diagonal
    [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
    [{ row: 0, col: 2 }, { row: 1, col: 1 }, { row: 2, col: 0 }]
]