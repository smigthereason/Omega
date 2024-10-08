import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-no-background.png";
import VideoBackground from "../assets/HF .mp4";
import "../styles/signup.css"

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // Simulate registration
    setIsRegistered(true);
  };

  if (isRegistered) {
    window.location.href = "/";
  }

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
          <div className="card">
            <Link to="/" className="lg">
              <img
                src={Logo}
                alt="Logo"
              />
            </Link>

            <form onSubmit={handleSubmit} className="form">
              <div className="f1">
                <label htmlFor="username" >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="f2">
                <label htmlFor="email" >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className=""
                  required
                />
              </div>
              <div className="f3">
                <label htmlFor="password" >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="f4">
                <label htmlFor="confirmPassword" >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="press"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
