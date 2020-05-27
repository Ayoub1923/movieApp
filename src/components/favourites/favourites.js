import React, { Component } from "react";

export default class Favourites extends Component {
  render() {
    let films = this.props.favmov;
    let favmovie = films.map((el) => (
      <div className="film" key={Math.random()}>
        <img title={el.name} alt="hi" className="image" src={el.img} />
        <i
          title="Remove from favourites"
          onClick={() => this.props.deletion(films.indexOf(el))}
          className="fa deleteFav fa-trash"
        ></i>
      </div>
    ));
    return (
      <div className="myfav">
        <div className="fav-content">{favmovie}</div>
      </div>
    );
  }
}
