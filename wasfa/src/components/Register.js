import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [checkPassword, setCheckPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handlePasswordMatch = (e) => {
    setCheckPassword(e.target.value);
  };

  if (checkPassword !== userInfo.password) {
    setPasswordMatch(false);
  }

  const { mutate: registerfn } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => setUser(true),
  });

  const handleForm = (e) => {
    e.preventDefault();
    registerfn();
    navigate("/myprofile");
  };
  return (
    <div className="flex justify-center content-center items-center">
      <div className="flex justify-center content-center items-center mt-[100px] border border-black w-[500px] h-[80%]">
        <div>
          <div className="flex mx-auto justify-center content-center items-center px-3">
            <div className="font-sans font-black before:content-['W'] bg-yellow-500 w-7 h-7 text-center text-xl italic rounded-lg text-white"></div>
            <div className="font-semibold text-xl tracking-tighter font-sans flex-shrink">
              Wasfa
            </div>
          </div>
          <div className="max-w-1/3">
            <div className="flex mx-auto gap-2 "></div>
            <div className="font-sans text-4xl font-black text-center my-8">
              Create an account
            </div>
            <h1 className="font-sans font-black text-center">
              Sign up to save and review your favorite recipes.
            </h1>

            <form onSubmit={handleForm} className="mt-8 mx-auto">
              <label htmlFor="email" className="my-4 flex content-center gap-4">
                <span className="w-1/3 self-center text-sm font-medium">
                  Email
                </span>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>

              <label htmlFor="name" className="my-4 flex content-center gap-4">
                <span className="w-1/3 self-center text-sm font-medium">
                  Username
                </span>
                <input
                  type="text"
                  id="name"
                  name="username"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>
              <label
                htmlFor="password"
                className="my-4 flex content-center gap-4"
              >
                <span className="w-1/3 self-center text-sm font-medium">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>

              <label
                htmlFor="password"
                className="my-4 flex content-center gap-4"
              >
                <span className="w-1/3 self-center text-sm font-medium">
                  Confirm Password
                </span>
                <input
                  name="confirm_password"
                  id="confirm_password"
                  type="password"
                  onChange={handlePasswordMatch}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>
              {passwordMatch ? "" : <div>password not matching</div>}
              <span className="text-center">
                Have an account?
                <Link
                  to="/login"
                  className="hover:text-slate-500 cursor-pointer hover:underline"
                >
                  <button> Log in</button>
                </Link>
              </span>

              <button
                type="submit"
                onClick={(e) => handleForm(e)}
                className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-white hover:text-yellow-500 w-full my-8"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
