import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
    <nav>
      {user ? (
        <>
          <span className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-transparent hover:text-yellow-500 mr-2">
            <NavLink to="/myprofile">Profile</NavLink>
          </span>
          <button
            className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-transparent hover:text-yellow-500"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-transparent hover:text-yellow-500"
            onClick={() => setShowModal(true)}
          >
            Log In
          </button>
          <LogIn showModal={showModal} setShowModal={setShowModal} />
        </>
      )}
    </nav>
  );
};

export default NavBar;
