import React, { useState, useEffect } from "react";

const Profile = (props) => {
  const [hobby, setHobby] = useState("Sleeping");

  useEffect(() => {
    console.log("UseEffect in Profile");
  }, [props.name, hobby]);

  useEffect(() => {
    console.log("UseEffect Did mount Profile");
    return () => {
      console.log("UseEffect return/cleanup in Profile");
    };
  }, []);

  return (
    <>
      <h5>This is Profile Page</h5>
      <p>My name is : {props.name}</p>
      <p>My Hobby is : {hobby}</p>
      <button onClick={() => setHobby("Long Drive")}>
        Change Hobby to Long Drove
      </button>
    </>
  );
};

export default Profile;
