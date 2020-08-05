import React, { Component } from 'react';

export default class CardFront extends Component {
  // function 

  render() {

    // console.log(this.props.poster)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
