import React from "react";
import { database } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
    const history = useNavigate()
  const signupHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;
    createUserWithEmailAndPassword(database, email, password,password2).then((data) => {
      console.log(data, "authData");
      history("/home")
    });
  };
  return (
    <div
      style={{
        border: "2px solid black",
        inlineSize: "fit-content",
        justifyContent: "center",
        margin: "auto",
        backgroundColor: "gray",
      }}
    >
      <h1>Login</h1>
      <hr />
      <div style={{}}>
        <form style={{ margin: "20px" }} onSubmit={signupHandler}>
          <input type="email" name="email" placeholder="Email"></input>
          <br />
          <input type="password" name="password" placeholder="Password"></input>
          <br />
          <input type="password" name="password2" placeholder=" Conform Password"></input>
          <br />
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
