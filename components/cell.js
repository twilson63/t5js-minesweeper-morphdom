var most = require('most')
var R = require('ramda')

var msSvc = require('service:ms-svc')()

module.exports = function (_) {
  return function (cell) {
    return _.div(msSvc.id(cell.x,cell.y) + '.col-xs-1', [
      msSvc.cellState(cell)
    ])
  }
}

most.fromEvent('click', document)
  .filter(ev => ev.target.classList.contains('col-xs-1'))
  .map(ev => R.tail(ev.target.id.split('')).join('').split('|'))
  .observe(cell => {
    msSvc.openCell(cell[0], cell[1])
  })
