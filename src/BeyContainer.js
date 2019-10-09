import React from "react";
import BeyCard from "./BeyCard"

class BeyContainer extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.props.data.map(slay => <BeyCard key={slay.id} info={slay} flipFav={this.props.flipFav} /> )}
      </div>
    );
  }
}

export default BeyContainer;
