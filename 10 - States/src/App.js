import React from "react";
import "./App.css";
import User from "./User/User";

class App extends React.Component {

  active = "Active";
  inactive = "Inactive";

  state = {
    username: "Mike",
    role: "Miner",
    active: true
  }

  render() {
    return (
      <div className="App">
        <h1 className="Red-color">Aplikacja React - JSX</h1>
        <div className="Form-container">
          <label className="Form-label">Username</label>
          <input className="Form-input" type="text" id="username" />
          <label className="Form-label">Role</label>
          <input className="Form-input" type="text" id="role" />
          <label className="Form-label">Active</label>
          <input className="Form-input" type="checkbox" id="active" />
          <button className="Form-button" >Show user</button>
        </div>
        <User username={this.state.username} role={this.state.role}>{this.state.active? this.active : this.inactive}</User>
      </div>
      //React.createElement('div',{className: 'App'},React.createElement('h1',{className: 'Red-color'},'Aplikacja React - createElement'))
    );
  }
}

export default App;
