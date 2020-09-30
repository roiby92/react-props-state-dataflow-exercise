import React, { Component } from 'react';

class Article extends Component {
  render() {
  return <div key={this.props.i}>{this.props.color} {this.props.type}</div>

  }
}

export default Article