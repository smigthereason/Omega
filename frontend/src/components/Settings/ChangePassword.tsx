import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-no-background.png";
import VideoBackground from "../../assets/pass.mp4";

interface FormData {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

function ChangePassword() {
  const [formData, setFormData] = useState<FormData>({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

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

        <div className="flex items-center justify-center bg-cover h-screen ">
          <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-transparent bg-opacity-60 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden  px-8 pt-6 pb-8 mb-4">
            <Link
              to="/settings"
              className="flex items-center text-white ml-28 px-10 py-8 "
            >
              <img
                src={Logo}
                alt="Logo"
                className="h-14 w-auto transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
              />
            </Link>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="currentPassword" className="block mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmNewPassword" className="block mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                  className="border p-2 w-full rounded-xl"
                  required
                />
              </div>

              <button
                type="submit"
                className=" text-white text-center px-2 py-2 ml-28 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChangePassword;
