import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state={
            show:false,
        }
    }
    render() {
        return this.state.show ? <p>Now you see me</p> : <p>Now you don't</p>
    }
}

export default Hudini