import React, { Component } from "react";
import "./App.css";

export default class Favourites extends Component {
  render() {
    let x = this.props.favmov;
    let favmovie = x.map((el) => (
      <div className="film" key={Math.random()}>
        <img alt="hi" className="image" src={el.img} />
        <div className="favtitle">{el.name}</div>
        <div className="favrate">{el.rate}</div>
        <div className="favdesc">{el.description}</div>
        <button
          onClick={() => this.props.deletion(x.indexOf(el))}
          className="favdelete"
        >
          Del
        </button>
      </div>
    ));

    return (
      <div className="myfav">
        <h1>My favourite films</h1>
        <div className="fav-content">{favmovie}</div>
      </div>
    );
  }
}
