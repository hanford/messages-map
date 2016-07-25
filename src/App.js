import React, { Component } from 'react'
import request from 'xhr-request'

import './App.css'

import MessageMap from './components/message-treemap/'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      data: []
    }
  }

  componentWillMount () {
    request('../messages.json', { json: true }, (err, data) => this.setState({ data }))
  }

  render() {
    const { data } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <h2>Messages Treemap</h2>
        </div>
        <div className="graph">
          <MessageMap data={ data } />
        </div>
      </div>
    )
  }
}
