import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"

class App extends React.Component {

  state = {
    slays: []
  }

  componentDidMount() {
    fetch("http://localhost:4000/beys")
    .then(resp => resp.json())
    .then(apiData => this.setState({
      slays: apiData
    }))
  }

  flipFav =(obj)=> {
    console.log("flipping:", obj)
    
    obj.favorite = !obj.favorite
    console.log("THIS:", this.state.slays)
    
    let test = this.state.slays[obj.id-1]
    console.log("TEST: ", test)

  }

  render() {
    return(
      <div className="container">
        <BeyContainer data={this.state.slays} flipFav={this.flipFav} />
        <Favorites data={this.state.slays.filter(slay => { return slay.favorite === true })} flipFav={this.flipFav} />
      </div>
    )
  }

}

export default App;