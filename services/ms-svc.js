var minesweeper = require('minesweeper')
var CellStateEnum = minesweeper.CellStateEnum
var CellFlagEnum = minesweeper.CellFlagEnum
var BoardStateEnum = minesweeper.BoardStateEnum

var listeners = []
var ma = minesweeper.generateMineArray({
  rows: 10,
  cols: 10,
  mines: 15
})
var board = new minesweeper.Board(ma)

module.exports = function () {

  return {
    grid: board.grid(),
    state: board.state(),
    openCell: function (x, y) {
      board.openCell(x, y)
      listeners.map(function (fn) {
        fn(board.grid(), board.state())
      })
    },
    addListener: function (fn) {
      listeners.push(fn)
    },
    id: function id (x,y) {
      return '#c' + x + '|' + y
    },
    cellState: function cellState (cell) {
      if (cell.state === CellStateEnum.CLOSED) {
        if (cell.flag === CellFlagEnum.NONE) {
          return 'X'
        } else if (cell.flag === CellFlagEnum.EXCLAMATION) {
          return '!'
        } else if (cell.flag === CellFlagEnum.QUESTION) {
          return '?'
        }
      } else if (cell.state === CellStateEnum.OPEN) {
        if (cell.isMine) {
          return '*'
        } else {
          return cell.numAdjacentMines === 0 ? ' ' : cell.numAdjacentMines.toString()
        }
      }
    },
    gameDesc: function description () {
      var state = board.state()
      if (state === BoardStateEnum.PRISTINE) {
        return 'Ready'
      } else if (state === BoardStateEnum.IN_PROGRESS) {
        return 'In Progress'
      } else if (state === BoardStateEnum.LOST) {
        return 'You Lose'
      } else if (state === BoardStateEnum.WIN) {
        return 'You Win'
      }
      return 'Unknown'
    }
  }
}
