import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
export default class Modall extends React.Component {
  state = {
    modal: false,
  };

  toggle = () => this.setState({ modal: !this.state.modal });
  render() {
    return (
      <div>
        <Button className="add-movie-button" onClick={this.toggle}>
          <i title="Add movie" className="fa fa-plus"></i>
        </Button>
        <center>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody className="model-body">
            <h1 className="modtitle">Add new movie</h1>
            <div>
              <input
                type="text"
                className="form-control "
                name="name"
                placeholder="Name"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => this.props.inputChange(e)}
              ></input>
              <input
                type="text"
                className="form-control "
                name="rate"
                placeholder="Rate"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => this.props.inputChange(e)}
              ></input>
              <input
                type="text"
                className="form-control "
                name="description"
                placeholder="Description"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => this.props.inputChange(e)}
              ></input>
              <input
                type="text"
                className="form-control "
                name="img"
                placeholder="Image"
                aria-describedby="basic-addon1"
                required
                onChange={(e) => this.props.inputChange(e)}
              ></input>
              <button className="add-movie" onClick={this.props.addFilm}>
                <i className="fa fa-check"></i>
              </button>
            </div>
          </ModalBody>
        </Modal>
      </center>
      </div>
    );
  }
}
