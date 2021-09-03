import React, { Component } from 'react'
import "./App.css"
const validMail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
var validPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export class App extends Component {
  constructor() {
    super()
    this.state = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: []
    }
  }
  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submit = () => {
    let error = [];
    if (this.state.fullName?.trim().length < 6 || !this.state.fullName) {
      error.push("invalidName")
    }
    if (!this.state.email?.trim() || !validMail.test(this.state.email.trim())) {
      error.push("invalidEmail")
    }
    if (!this.state.password?.trim() || !validPass.test(this.state.password.trim())) {
      error.push("invalidPassword")
    }
    if (!this.state.confirmPassword?.trim()) {
      error.push("empty")
    }
    if (this.state.password?.trim() !== this.state.confirmPassword?.trim()) {
      error.push("mismatch")
    }
    if (error.length) {
      this.setState({ error })
    } else {
      this.setState({ error: [] })
    }
  }
  reset = () => {
    this.setState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: []
    })
  }
  render() {
    return (
      <>
        <div className="main">
          <div className="container">
            <h2 className="text-center">Sign Up Form</h2>
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6 formsection">
                <div className="form">
                  <div className="mb-3">
                    <label className="form-label">Full Name :</label>
                    <input type="text" className="form-control" value={this.state.fullName} name="fullName" placeholder="Enter your Full name here" onChange={(event) => this.change(event)} />
                    {this.state.error.includes('invalidName') && (
                      <p className="error">Full Name must be at least 6 characters long!</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address :</label>
                    <input type="email" className="form-control" value={this.state.email} name="email" placeholder="name@example.com" onChange={(event) => this.change(event)} />
                    {this.state.error.includes('invalidEmail') && (
                      <p className="error">Either You haven't entered Mail Id or Your entered id isn't valid</p>
                    )}
                  </div>
                  <div class="mb-3">
                    <label className="form-label">Password :</label>
                    <input type="password" className="form-control" value={this.state.password} name="password" placeholder="Enter Password" onChange={(event) => this.change(event)} />
                    {this.state.error.includes('invalidPassword') && (
                      <p className="error">Password must be at least 8 characters long & contain at least 1 special characters,1 uppercase & lowercase letter & 1 digit</p>
                    )}
                  </div>
                  <div class="mb-3">
                    <label className="form-label">Confirm Password :</label>
                    <input type="password" className="form-control" value={this.state.confirmPassword} name="confirmPassword" placeholder="Confirm Password" onChange={(event) => this.change(event)} />
                    {this.state.error.includes('empty') && (
                      <p className="error">Confirm password shouldn't be empty</p>
                    )}
                    {this.state.error.includes('mismatch') && (
                      <p className="error">The password and confirm password doesn't match</p>
                    )}
                  </div>
                  <button type="submit" class="btn btn-primary" onClick={() => this.submit()}>Submit</button>
                  <button type="reset" value="reset" class="btn btn-danger mx-4" onClick={() => this.reset()}>Reset</button>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
