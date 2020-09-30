import React, { Component } from 'react';

class Landing extends Component {

    findHotest() {
        const theHottest = this.props.store.find(i => i.hottest === true)
        return theHottest
    }

    render() {
        const item = this.findHotest()
        return <span>the hottest item is {item.item} for ${item.price}</span>
    }
}

export default Landing