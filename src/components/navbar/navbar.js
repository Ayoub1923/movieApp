import React from "react";
import { Link } from "react-router-dom";
import SignUp from '../signup/sign'
export default class Navbar extends React.Component {
  state = {
    star1: "black",
    star2: "black",
    star3: "black",
    star4: "black",
    star5: "black",
  };
  st1 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "black",
      star3: "black",
      star4: "black",
      star5: "black",
    });
  };
  st2 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "yellow",
      star3: "black",
      star4: "black",
      star5: "black",
    });
  };
  st3 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "yellow",
      star3: "yellow",
      star4: "black",
      star5: "black",
    });
  };
  st4 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "yellow",
      star3: "yellow",
      star4: "yellow",
      star5: "black",
    });
  };
  st5 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "yellow",
      star3: "yellow",
      star4: "yellow",
      star5: "yellow",
    });
  };
  render() {
    return (
      <div className="nav">
        <div className="logo">Ciné Scoop</div>
        <div >
         <span > <Link className="routes" to="/">Home</Link></span>
         <span > <Link className="routes" to="/favourites">My favourites</Link></span>
        </div>
        <span className="search-bar">
          <i className="fa loop fa-search"></i>
          <input
            onChange={this.props.passSearch}
            placeholder="Search"
            className="input"
            type="text"
          ></input>
          <div className="starfield">
            <p>
              <span
                style={{ color: this.state.star1 }}
                onClick={() => {
                  this.st1();
                  this.props.searchRate(1);
                }}
                id="1"
              >
                ★
              </span>
              <span
                style={{ color: this.state.star2 }}
                onClick={() => {
                  this.st2();
                  this.props.searchRate(2);
                }}
                id="2"
              >
                ★
              </span>
              <span
                style={{ color: this.state.star3 }}
                onClick={() => {
                  this.st3();
                  this.props.searchRate(3);
                }}
                id="3"
              >
                ★
              </span>
              <span
                style={{ color: this.state.star4 }}
                onClick={() => {
                  this.st4();
                  this.props.searchRate(4);
                }}
                id="4"
              >
                ★
              </span>
              <span
                style={{ color: this.state.star5 }}
                onClick={() => {
                  this.st5();
                  this.props.searchRate(5);
                }}
                id="5"
              >
                ★
              </span>
            </p>
          </div>
        </span>
        <SignUp />
      </div>
    );
  }
}
