import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.props.data.map(slay => <BeyCard key={slay.id} info={slay} flipFav={this.props.flipFav} />)}
      </div>
    );
  }
}
