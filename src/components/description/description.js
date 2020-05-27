import React, { Component } from "react";
export default class App extends Component {
  state = {
    display: true,
    description: "",
    verify: true,
  };
  showEditor = () => {
    this.setState({ display: !this.state.display });
  };
  displayDescription = (el) => {
    if(this.state.verify === true)
    return el.description
    else return this.state.description
  };
  editDescription = (e) => {
    this.state.verify = false;
    this.state.description = e.target.value;
  };
  render() {
    let description = this.props.des;
    let favmovie = description.map((el) => (
      <div className="desfilm" key={Math.random()}>
        <h1 className="headerdesc">Film description</h1>
        <div className="description-content">
          <img className=" desimage" src={el.img} />
          <div className="film-caracteristics">
            <div className="destitle">{el.name}</div>
            <div className="desrate">{el.rate}</div>
            <br></br>
            <br></br>
            <br></br>
            <div className="story">{this.displayDescription(el)}</div>
            <i onClick={this.showEditor} className="fa edit-icon fa-edit"></i>
            <div>
              <textarea
                type="text"
                defaultValue={el.description}
                onChange={this.editDescription}
                style={{ display: this.state.display? "none" : "block"}}
                className="editor-field"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div>{favmovie}</div>
      </div>
    );
  }
}
