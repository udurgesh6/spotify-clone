import React from 'react';
import "./Login.css";
import { loginUrl } from './spotify';
function Login() {
    return (
        <div className="login">
            
            {/* Spotify Logo */}
            <img src="https://www.androidsis.com/wp-content/uploads/2019/10/logo-spotify.jpg" alt=""></img>
            
            {/* Login with spotify button */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
