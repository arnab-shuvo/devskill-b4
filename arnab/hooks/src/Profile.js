import React, { useState, useEffect } from "react";

const Profile = (props) => {
  const [name, setName] = useState("Arnab");
  const [location, setLocation] = useState("Dhaka");

  useEffect(() => {
    setLocation({ name: "Khulna" });
  }, [location]);

  return (
    <>
      <p>My name is : {name}</p>
      {/* <p>My location is : {location}</p> */}
      <button onClick={() => setName("Shuvo")}>Name</button>
      <button onClick={() => setLocation({ name: "Khulna" })}>Location</button>
    </>
  );
};

export default Profile;
