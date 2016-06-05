module.exports = function (_) {
  var Cell = require('component:cell')(_)

  return function (row) {
    return _.div('.row', [
      _.div('.col-xs-1', ['|']),
      row.map(Cell),
      _.div('.col-xs-1', ['|'])
    ])
  }
}
