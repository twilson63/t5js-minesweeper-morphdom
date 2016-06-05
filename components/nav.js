var msSvc = require('service:ms-svc')()

module.exports = function (_) {
  return function (state) {
    return _.div('.container', [
      _.div('.navbar.navbar-light.bg-faded', [
        _.a('.navbar-brand', { href: '#'}, [state.title]),
        _.div('.pull-xs-right.label.label-success', [msSvc.gameDesc()])
      ])
    ])
  }
}
