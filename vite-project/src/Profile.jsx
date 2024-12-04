import { useState } from "react";

function Profile({name}) {
    const [status, setStatus] = useState('Available');
    console.log("Profile Rendered.");

    const setAway = () => {
        setStatus('set away');
    }

    const setAvailable = () => {
        setStatus('set avaliable');
    }

    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Status: {status}</p>
            <button onClick={setAway}>Set Away</button>
            <button onClick={setAvailable}>Set Available</button>
        </div>
    );
}

export default Profile