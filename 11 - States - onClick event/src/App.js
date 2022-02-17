import React from "react";
import "./App.css";
import User from "./User/User";

class App extends React.Component {

  active = "Active";
  inactive = "Inactive";

  state = {
    username: "Mike",
    role: "Miner",
    active: false
  }

  setUserDataHandler = () =>{
    console.log("UserDataHandler triggered");
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const active = document.getElementById('active').checked;

    //Nie używać tego - to nie działa
    //this.state.username = username;
    this.setState(
      {
        username: username,
        role: role,
        active: active
      }
    );

  }
  //Gdy wywołujemy funkcje w JSX, nie dodajemy () ponieważ powoduje to że funkcja wykonuje się z każdym renderem (np. refreshem strony).

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
          <button onClick={this.setUserDataHandler} className="Form-button" >Show user</button>
        </div>
        <User username={this.state.username} role={this.state.role}>{this.state.active? this.active : this.inactive}</User>
      </div>
      //React.createElement('div',{className: 'App'},React.createElement('h1',{className: 'Red-color'},'Aplikacja React - createElement'))
    );
  }
}

export default App;
