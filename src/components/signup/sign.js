import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
export default class SignUp extends React.Component {
  state = {
    modal: false,
    name: "",
    mail: "",
    pass: "",
    confPass: "",
    email: false,
    password: false,
    display: "none",
  };
  toggle = () => this.setState({ modal: !this.state.modal });
  printMail = (e) => {
    let x = ".+@(gmail.com|yahoo.fr)";
    if (e.target.value.match(x)) this.state.mail = e.target.value;
  };
  printPass = (e) => {
    this.state.pass = e.target.value;
  };
  confirmPass = (e) => {
    this.state.confPass = e.target.value;
  };
  signUp = (e) => {
    e.preventDefault()
    if (
      this.state.pass === this.state.confPass &&
      this.state.mail != "" &&
      this.state.pass != ""
    ) {
      localStorage.setItem("mail", this.state.mail);
      localStorage.setItem("pass", this.state.pass);
      this.setState({display :'block'})
    } 
    else if(this.state.mail == '') alert("Please insert a valid address");
    else if(this.state.pass != this.state.confPass | this.state.pass == '' ) alert("Password not valid");
    } 
  verifMail = (seeMail) => {
    if (seeMail === localStorage.getItem("mail")) this.state.email=true
    else this.state.email = false;
    console.log(this.state.email)
  };
  verifPass = (seePass) => {
    if (seePass === localStorage.getItem("pass"))
    this.state.password = true;
    else {
      this.setState({password : false});
    }
    console.log(this.state.password)
    
  };
  verif = (e) => {
    e.preventDefault()
    if (e.target.id === "emailin") this.verifMail(e.target.value);
    if (e.target.id === "passwordin") this.verifPass(e.target.value);
  };
  showSignIn = () => {
    this.setState({display : "block"});
  };
  login=(e)=>{
    e.preventDefault()
    if (this.state.email === true && this.state.password === true) 
this.toggle() 
else alert("No such coordinates") }
  render() {
    return (
      <center>
        <Button className="button-color" onClick={this.toggle}> Sign in/Sign up</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody className="modal-box-sign">
            <div style={{display:this.statedisplay}}>
              <form style={{ display: !this.state.display }} type="submit">
                <h3 className="sign">Sign Up</h3>
                <div className="form-group">
                  <input className='sign-inputs'
                    onChange={(e) => (this.state.name = e.target.value)}
                    type="text"
                    id="name"
                    placeholder="Pseudo"
                  />
                </div>
                <div className="form-group">
                  <input className='sign-inputs'
                    onChange={this.printMail}
                    type="email"
                    id="email"
                    placeholder="E-mail"
                  />
                </div>

                <div className="form-group">
                  <input className='sign-inputs'
                    onChange={this.printPass}
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="form-group">
                  <input className='sign-inputs'
                    onChange={this.confirmPass}
                    style={{ border: this.state.border, outline: "none" }}
                    type="password"
                    id="confPassword"
                    placeholder="Confirm password"
                  />
                </div>

                <button
                  className="submit-sign"
                  onClick={this.signUp}
                >
                  Sign Up
                </button>
                <p className="text-right">
                  Already registered{" "}
                  <i className="forgot-password " onClick={this.showSignIn} >
                    sign in?
                  </i>
                </p>
              </form>
              <form style={{ display: this.state.display }}>
                <h3 className="sign">Sign In</h3>

                <div className="form-group">
                  <input className='sign-inputs'
                    onChange={this.verif}
                    type="email"
                    id="emailin"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group">
                  <input className='sign-inputs' 
                    onChange={this.verif}
                    type="password"
                    id="passwordin"
                    placeholder="password"
                  />
                </div>

                <button
                  onClick={this.login}
                  type="submit"
                  className="submit-sign"
                >
                  Sign In
                </button>
                <p className="forgot-password text-right"></p>
              </form>
            </div>
          </ModalBody>
        </Modal>
      </center>
    );
  }
}
