import React, { Component } from 'react'

export default class HandlerEx extends Component {
    
    state = {
        text: "Hello World!"
    }

    render() {
        const {text} = this.state;
        return (
            <div>
                <h1>{text}</h1>
                <button onClick={() => {
                    this.setState({text: "Goodbye World!"});
                }}>Press</button>
            </div>
        )
    }
}