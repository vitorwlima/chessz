import { Board } from '../../board'

type PartialBoard = Omit<Partial<Board>, 'position'> & {
  position: Partial<Board['position']>
}

export const getEmptyBoard = (board?: PartialBoard) =>
  new Board({
    position: {
      a1: null,
      a2: null,
      a3: null,
      a4: null,
      a5: null,
      a6: null,
      a7: null,
      a8: null,
      b1: null,
      b2: null,
      b3: null,
      b4: null,
      b5: null,
      b6: null,
      b7: null,
      b8: null,
      c1: null,
      c2: null,
      c3: null,
      c4: null,
      c5: null,
      c6: null,
      c7: null,
      c8: null,
      d1: null,
      d2: null,
      d3: null,
      d4: null,
      d5: null,
      d6: null,
      d7: null,
      d8: null,
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      e8: null,
      f1: null,
      f2: null,
      f3: null,
      f4: null,
      f5: null,
      f6: null,
      f7: null,
      f8: null,
      g1: null,
      g2: null,
      g3: null,
      g4: null,
      g5: null,
      g6: null,
      g7: null,
      g8: null,
      h1: null,
      h2: null,
      h3: null,
      h4: null,
      h5: null,
      h6: null,
      h7: null,
      h8: null,
      ...board?.position,
    },
    turn: 'white',
    movesPlayed: 0,
    ...board,
  } as Board)
