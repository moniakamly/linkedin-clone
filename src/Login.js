import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const login = (e) => {
        e.prevenetDefault();
    }

    const register = () => {

    };
    
    return (
        <div className="login">
            <img src="data:image/png;base64,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" alt="" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)"/>
                <input value={email} onChange={ e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={ e => setPassword(e.target.value)} type="password" placeholder="password" />
                <button type="submit" onClick={login}>Sign In</button> 
            </form>

            <p>Not a member? {" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
