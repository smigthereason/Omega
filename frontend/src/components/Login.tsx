import React, { useState } from "react";
import "../styles/Login.css";
import Logo from "../assets/logo-no-background.png";
import VideoBackground from "../assets/Spider.mp4";
import { Link } from 'react-router-dom';
import LoginAudio from '../assets/Metro Boomin, NAV, A Boogie wit da Hoodie, Swae Lee - Calling.mp3';

const Login: React.FC = () => {
  const [audio] = useState<HTMLAudioElement>(new Audio(LoginAudio)); 

  const handleLogoClick = () => {
    audio.pause(); 
    audio.currentTime = 0; // Reset audio to start
  };

  return (
    <>
      <section className="video-section">
        <video
          src={VideoBackground}
          autoPlay
          loop
          muted
          className="video-background"
        />
        <div className="flex items-center justify-center bg-cover h-screen">
          <div className="card-holder">
            <Link
              to="/"
              className="logo-1"
              onClick={handleLogoClick}
            >
              <img src={Logo} alt="Logo" />
            </Link>
            <form>
              <div className="container">
                <label
                  className="head"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="input"
                  id="username"
                  type="text"
                  placeholder="Your Username"
                  required
                />
              </div>
              <div className="container2">
                <label
                  className="head"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="input"
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  required
                />
              </div>
              <div className="press">
                <button
                  className=""
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
