//SKŁADNIA ES - funkcja strzałkowa
import React from "react";

const user = (props) => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    <div>
    <button onClick={props.buttonClick} className="Form-button" >Show user</button>
      <h2>
        I'm {props.username} my role is {props.role}, current hour is{" "}
        {hour + ":" + minute + ":" + second}
      </h2>
      <h3>
        I'm {props.children}
      </h3>
    </div>
  );
};

export default user;
