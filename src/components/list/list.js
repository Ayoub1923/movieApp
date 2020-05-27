import React from "react";
import { Link } from "react-router-dom";
import Modall from "../addmovie/addMovie";
export default class List extends React.Component {
  render() {
    const { films } = this.props;
    const film = films.map((film) => (
      <div className="film" key={Math.random() * 100}>
        <div>
        <div className="rate">
          {film.rate}
        </div>
          <Link to="/description">
            <img
              title={film.name}
              alt="hi"
              className="image"
              src={film.img}
              onClick={() => this.props.seeTrail(film)}
            />
          </Link>
          <i
            title="Add to favourites"
            className="fa fav fa-plus"
            onClick={() => this.props.addFav(films.indexOf(film))}
          />
        </div>
        {/* <div className="title">{film.name}</div> */}
      
        {/* <div className="desc">{film.description}</div> */}
        <div className="buttons">
          <i
            title="Delete film"
            onClick={() => this.props.deletion(films.indexOf(film))}
            className="fa icon fa-trash"
          ></i>
        </div>
      </div>
    ));
    return (
      <div className="list">
        <Modall
          addFilm={this.props.addFilm}
          inputChange={this.props.inputChange}
        />
        {film}
      </div>
    );
  }
}
