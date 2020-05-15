import React, { Component } from "react";
import "./App.css";
export default class Description extends Component {
  render() {
    let x = this.props.des;
    let favmovie = x.map((el) => (
      <div className="film desfilm" key={Math.random()}>
        <h1 className="headerdesc">Film description</h1>
        <img className="image desimage" src={el.img} />
        <div className="favtitle destitle">{el.name}</div>
        <div className="favrate desrate">{el.rate}</div>
        <div className="favdesc desdesc">{el.description}</div>
      </div>
    ));
    return (
      <div>
        <div>{favmovie}</div>
      </div>
    );
  }
}
