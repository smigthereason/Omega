import React, { ChangeEvent } from "react";
import "./Settings/Settings.css";
import { Link } from "react-router-dom";

const Settings: React.FC = () => {
  // For handling file input change events (upload new photo)
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file.name);
    }
  };

  return (
    <div className="container mx-auto py-8 h-screen">
      <div className="flex w-auto h-screen">
        <div className=" rounded-lg p-6 w-full">
          <h4 className="font-bold text-lg mb-4 uppercase text-white">
            Account settings
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-3">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  {/* <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-full mr-4" /> */}
                  <div>
                    <label className="text-blue-500 cursor-pointer">
                      Upload new photo
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                    <button
                      type="button"
                      className="btn-reset text-sm ml-4 text-gray-400 hover:text-gray-500"
                    >
                      Reset
                    </button>
                    <p className="text-xs text-gray-400 mt-1">
                      Allowed JPG, GIF or PNG. Max size of 5MB
                    </p>
                  </div>
                </div>
                <hr className="border-gray-700" />
                <div className="mt-4">
                  <div className="mb-4 text-black">
                    <label className="block text-gray-400 mb-1">Username</label>
                    <input
                      type="text"
                      className="input-field rounded-lg"
                      value=""
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-1">Name</label>
                    <input
                      type="text"
                      className="input-field rounded-lg"
                      value=""
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text- mb-1">E-mail</label>
                    <input
                      type="email"
                      className="input-field rounded-lg"
                      value=""
                      placeholder="...@gmail.com"
                      required
                    />
                    <div className="alert-warning mt-3 text-xs">
                      Your email is not confirmed. Please check your inbox.
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-400 mb-1">OTP</label>
                    <input
                      type="text"
                      className="input-field rounded-lg"
                      value=""
                      placeholder="Enter OTP"
                      required
                    />
                    <div className="alert-warning mt-3 text-xs">
                      Please enter OTP to confirm account.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-gray-800 rounded-lg p-4">
                <ul className="list-none">
                  <li className="mb-2">
                    <Link
                      to="/settings"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      General
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/changePassword"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      Change Password
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/socialLinks"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      Social Links
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/notifications"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      Notifications
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/billing"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      Billing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-left mt-4 w-full">
              <button
                type="button"
                className="btn-primary text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Save
              </button>
              <Link to="/">
                <button
                  type="button"
                  className="btn-default ml-2 text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
