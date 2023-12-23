import React from "react";
import "./Profile.css";
import Header from "./header";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const history = useNavigate();
  const backHome = () => {
    history("/");
  };
  return (
    <>
    <Header/>
      <div className="profileDiv">
        <h3>ContactDetails</h3>
        <div className="profilrInfo">
          <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" />
            <label htmlFor="profilePhotourl">Profile Photo URL:</label>
            <input type="text" /><br />
            <button>Upload</button>
            <button onClick={backHome} className="cancel">Cancel</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
