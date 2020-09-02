import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}

// '<div class="card-front" style="background-image:url()"></div>' to equal '<div class="card-front" style="background-image:url(you spin me right round)"></div>'