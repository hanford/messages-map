import React, { Component } from 'react'
import request from 'xhr-request'
import sortOn from 'sort-on'

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
    request('../messages.json', { json: true }, (err, data) => {
      data = data
        .filter(d => d.title.split(', ').length === 2)
        .filter(Boolean)

      data = data
        .map(function (t) {
          let usernames = t.title
            .split(', ')

          let indexOfUser = usernames
            .findIndex((element, index, array) => element === 'Jack Hanford')

          usernames.splice(indexOfUser, 1)

          t.title = usernames.toString()

          return t
        })

      data = sortOn(data, '-size')

      data = data.splice(0, 30)

      this.setState({ data })
    })
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
