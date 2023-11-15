import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { checkToken } from "./api/auth";
import UserContext from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipes";
import CreateRecipe from "./components/CreateRecipe";
import OneRecipe from "./components/OneRecipe";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/register" Component={Register} />
          <Route path="/myprofile" Component={Profile} />
          <Route path="/login" Component={LogIn} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/crecipe" Component={CreateRecipe} />
          <Route path="/recipe/:recipeId" Component={OneRecipe} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
