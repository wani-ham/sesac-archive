import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count : 0,
    }

  render() {
    const {count} = this.state;
    const increase = () => {
        this.setState({count: count + 2})
    }

    const decrease = () => {
        this.setState({count: count - 1})
    }
    return (
        <div>
            <h1>Class Component State</h1>
            <h1>{count}</h1>

            <button onClick={increase}>+2</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
  }
}