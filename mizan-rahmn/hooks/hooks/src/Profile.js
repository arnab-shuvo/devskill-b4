import React, { useEffect, useState } from 'react';

const Profile = (props) => {
    const [name, setName] = useState("Lamia");
    const [location, setLocation] = useState("Dhaka");
    const [gender, setGender] = useState("Felame");

    useEffect(() => {
        console.log("Hi, to name update in Profile.");
    }, [name]);

    useEffect(() => {
        console.log("Hi, to location update in Profile.");
    }, [location]);
    
    return (
        <>
            <p>{name} : is an awesome girl.</p>
            <p>She lives in: {location}.</p>
            <p>She belongs to gender : {gender}.</p>
            <button onClick={() => setName("Ahmed")}>Name</button>
            <button onClick={() => setLocation("Mohammadpur")}>Location</button>
            <button onClick={() => setGender("Femalee")}>Gender</button>
        </>
    );
}

export default Profile;