module.exports = function (_) {
  var Nav = require('component:nav')(_)
  var Board = require('component:board')(_)

  return function (state) {
    return _.div([
      Nav(state),
      Board(state)
    ])
  }
}
