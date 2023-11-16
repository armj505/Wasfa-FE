import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      console.log(e.target.value);
    }
  };
  const { mutate: registerfn, error } = useMutation({
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
    <div
      class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg")`,
      }}
    >
      <div className="flex justify-center content-center items-center">
        <div className="flex justify-center content-center items-center mt-[100px] border border-black w-[500px] h-[80%] bg-white">
          <div>
            <div className="flex mx-auto justify-center content-center items-center px-3"></div>
            <div className="max-w-1/3">
              <div className="flex mx-auto gap-2 "></div>
              <div className="font-sans text-4xl font-black text-center my-4">
                Create an account
              </div>
              <h1 className="font-sans font-black text-center">
                Sign up to save and review your favorite recipes.{" "}
              </h1>
              {/* <h1 className="font-sans text-2xl font-black text-center mt-4">
            Register
          </h1> */}

              <form onSubmit={handleForm} className="mt-8 mx-auto">
                <label
                  htmlFor="email"
                  className="my-4 flex content-center gap-4"
                >
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

                <label
                  htmlFor="name"
                  className="my-4 flex content-center gap-4"
                >
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
                {/* password  */}
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
                    onChange={handleChange}
                    className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    required
                  ></input>
                </label>

                <button
                  type="submit"
                  onClick={registerfn}
                  className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-white hover:text-yellow-500 w-full my-8"
                >
                  Register
                </button>
                {/* <h1 className="text-red-700 ">{error?.message}</h1> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
