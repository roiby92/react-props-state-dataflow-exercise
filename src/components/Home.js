import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return this.props.store.map(s=><Item item={s.item} price={s.price}/>)

    }
}

export default Home