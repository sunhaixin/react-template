import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './view'
import Error from './view/Error'
import 'babel-polyfill'

class App extends React.Component {
  render () {
    return (
      <Switch>
        <Route path="/" component={Index} />
        <Route component={Error} />
      </Switch>
    )
  }
}

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
)
