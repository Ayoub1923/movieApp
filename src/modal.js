import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div className="add-movie">
        <input type="text" className="form-control " name='name' placeholder="Name" aria-describedby="basic-addon1" required onChange={e => this.props.inputChange(e)} ></input>
        <input type="text" className="form-control " name='rate' placeholder="Rate" aria-describedby="basic-addon1" required onChange={e => this.props.inputChange(e)} ></input>
        <input type="text" className="form-control " name='description' placeholder="Description" aria-describedby="basic-addon1" required onChange={e => this.props.inputChange(e)} ></input>
        <input type="text" className="form-control " name='img' placeholder="Image" aria-describedby="basic-addon1" required onChange={e => this.props.inputChange(e)} ></input>
        <i onClick={this.props.addFilm} className="fa add fa-plus"></i>
      </div>
    )
  }
}
