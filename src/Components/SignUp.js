import React, { useState } from "react";
import { database } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();
  const signupHandler = (e, type) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;
    if (type == "logIn") {
      createUserWithEmailAndPassword(database, email, password, password2)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((error) => {
          alert(error.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password, password2)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((error) => {
          alert(error.code);
        });
    }
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
      <div style={{ display: "flex", margin: "10px", fontSize: "20px" }}>
        <div style={{ marginLeft: "25px" }}>
          <button onClick={() => setLogin(false)}>SignUp</button>
        </div>
        <div style={{ marginLeft: "15px" }}>
          <button onClick={() => setLogin(true)}>LogIn</button>
        </div>
      </div>
      {/* <h1>{login?"logIn":"signUp"}</h1> */}
      <hr />
      <div style={{}}>
        <form
          style={{ margin: "20px" }}
          onSubmit={(e) => signupHandler(e, login ? "logIn" : "signUp")}
        >
          <input type="email" name="email" placeholder="Email"></input>
          <br />
          <input type="password" name="password" placeholder="Password"></input>
          <br />
          <input
            type="password"
            name="password2"
            placeholder=" Conform Password"
          ></input>
          <br />

          <button type="submit">{login ? "logIn" : "signUp"}</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
