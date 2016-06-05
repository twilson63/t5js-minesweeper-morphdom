module.exports = function (_) {
  var Row = require('component:row')(_)

  return function (state) {
    return _.div('.container', [
      state.grid.map(Row)
    ])
  }
}
