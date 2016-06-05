var morphdom = require('morphdom')
var h = require('hyperscript')
var _ = require('hyperscript-helpers')(h)

// services
var msSvc = require('service:ms-svc')()

// components
var App = require('component:app')(_)

// render helper
var target = document.getElementById('app')

function render (state) {
  target = morphdom(target, App(state))
}

// when board updates re-render dom
msSvc.addListener(function (grid, state) {
  render({
    title: 'Minesweeper',
    grid: grid,
    state: state
  })
})


render({
  title: 'Minesweeper',
  grid: msSvc.grid,
  state: msSvc.state
})
