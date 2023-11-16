import React from "react";
import { base_URL } from "../api";
import { NavLink } from "react-router-dom";

const RecipeItem = ({ recipe, recipeId }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="bg-white p-6 rounded-lg flex flex-col justify-center items-center">
        <h4>Recipe Title: {recipe?.title}</h4>
        <img className="w-80" src={recipe?.image} />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          Serving: {recipe?.serving}
        </h3>
        <div className="flex justify-center items-center ">
          <button
            type="button"
            class="inline-block  text-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-indigo-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <NavLink to={"/recipe/:recipeId"}> View Recipe</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
