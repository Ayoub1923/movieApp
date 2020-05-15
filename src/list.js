import React from "react";
import { Link } from "react-router-dom";

export default class List extends React.Component {
  state = {
    visibility: "hidden",
  };
  edit = () => {
    this.setState({ visibility: "visible" });
  };
  hide = () => {
    this.setState({ visibility: "hidden" });
  };
  render() {
    const { films } = this.props;
    const film = films.map((film) => (
      <div className="film" key={Math.random() * 100}>
        <div>
          <img alt="hi" className="image" src={film.img} />
        </div>
        <div className="title">{film.name}</div>
        <div style={{ color: "yellow" }} className="rate">
          {film.rate}
        </div>
        {/* <div className="desc">{film.description}</div> */}
        <div className="buttons">
          <button onClick={() => this.props.seeTrail(film)} className="trail">
            See trailer
          </button>
          <Link to="/favourites">
            <button
              onClick={() => this.props.addFav(films.indexOf(film))}
              className="fav"
            >
              Add to fav
            </button>
          </Link>
          <button onClick={this.edit} className="trail moodif">
            Modif
          </button>
          <button
            onClick={() => this.props.deletion(films.indexOf(film))}
            className="delete"
          >
            Del
          </button>
        </div>
      </div>
    ));
    return (
      <div className="list">
        {film}
        <div className="modal" style={{ visibility: this.state.visibility }}>
          <h1 className="modalheader">Edit film</h1>
          <input className="modimp" placeholder=""></input>
          <input className="modimp" placeholder=""></input>
          <input className="modimp" placeholder=""></input>
          <button className="trail cancel" onClick={this.hide}>
            X
          </button>
        </div>
      </div>
    );
  }
}
