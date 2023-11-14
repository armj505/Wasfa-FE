import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../api/auth";
import UserContext from "../context/UserContext";
import LogIn from "./LogIn";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    setUser(false);
    navigate("/");
  };
  return (
    <nav className="flex justify-between bg-yellow-500 ">
      {user ? (
        <>
          <div className="flex justify-center items-center gap-1 px-2">
            <span className="py-2 px-4   hover:text-white mr-2">
              <NavLink to="/myprofile">Profile</NavLink>
            </span>
            <button className="py-2   hover:text-white" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
          <div className="flex mx-auto ">
            <div className=" font-sans font-black before:content-['W'] bg-yellow-500 w-7 h-7 text-center text-xl italic  text-white py-2 px-4"></div>
            <div className="font-semibold text-xl tracking-tighter font-sans flex-shrink flex justify-center items-center py-2 px-2 mr-3">
              Wasfa
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 px-2">
            <Link className=" py-2 px-4  hover:text-white" to="/recipes">
              Recipes
            </Link>

            <form action="" class="relative mx-auto w-max">
              <input
                type="search"
                class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-white peer-focus:stroke-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        </>
      ) : (
        <>
          <button
            className=" py-2 px-6   hover:text-white mr-6"
            onClick={() => setShowModal(true)}
          >
            Log In
          </button>
          <LogIn showModal={showModal} setShowModal={setShowModal} />
          {/* <div className="flex mx-auto gap-2 mt-2"> */}
          <div className="flex mx-auto ">
            <div className=" font-sans font-black before:content-['W'] bg-yellow-500 w-7 h-7 text-center text-xl italic  text-white py-2 px-4"></div>
            <div className="font-semibold text-xl tracking-tighter font-sans flex-shrink flex justify-center items-center py-2 px-2 mr-3">
              Wasfa
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 px-2">
            <Link className="py-1 px-3 hover:text-white" to="/recipes">
              Recipes
            </Link>

            <form action="" class="relative mx-auto w-max">
              <input
                type="search"
                class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-black px-3.5 peer-focus:border-white peer-focus:stroke-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
