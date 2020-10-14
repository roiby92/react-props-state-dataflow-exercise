import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
    render() {
        return this.props.store.map(s=>{
            this.props.discount ?
            <Item item={s.item} price={s.price*=(1-s.discount)}/> :
            <Item item={s.item} price={s.price}/>
        })

    }
}

export default Home