import React from "react";
import "./App.css";

export default class Navbar extends React.Component {
  state = {
    star1: "",
    star2: "",
    star3: "",
    star4: "",
    star5: "",
  };
  st1 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "gray",
      star3: "gray",
      star4: "gray",
      star5: "gray",
    });
  };
  st2 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "yellow",
      star3: "gray",
      star4: "gray",
      star5: "gray",
    });
  };
  st3 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "yellow",
      star3: "yellow",
      star4: "gray",
      star5: "gray",
    });
  };
  st4 = (e) => {
    this.setState({
      star1: "yellow",
      star2: "yellow",
      star3: "yellow",
      star4: "yellow",
      star5: "gray",
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
        <div className="logo">Ciné Simplon</div>
        <span className="search-bar">
          <i className="fa loop fa-search"></i>
          <input
            onChange={this.props.passSearch}
            placeholder="Search"
            className="input"
            type="text"
          ></input>
          <div>
            <p>
              {" "}
              <span
                style={{ color: "yellow" }}
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
      </div>
    );
  }
}
