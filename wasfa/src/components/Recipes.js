import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipes";
import RecipeItem from "./RecipeItem";
import React from "react";
import ListCategories from "./ListCategories";
import ListIngredients from "./ListIngredients";

const Recipes = () => {
  const { data: recipes } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(),
  });

  const recipeList = recipes?.map((recipe) => (
    <RecipeItem recipe={recipe} key={recipe._id} />
  ));
  console.log(recipeList);

  return (
    <div
      class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg")`,
      }}
    >
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto max-w-7x1 bg-gray-300">
          <div className="flex flex-wrap w-full mb-4 p-4 ">
            <div className="w-full mb-6 lg:mb-0 flex flex-wrap gap-4 justify-between">
              <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900 ">
                All Recipes
              </h1>
              <button
                className="inline-block bg-white rounded border-2 border-primary-100 px-6 pb-[6px] pt-2 text-xs font-large uppercase leading-normal text-primary-700 transition 
            duration-150 ease-in-out hover:border-primary-accent-100
             hover:white hover:bg-opacity-10
              focus:border-primary-accent-100 focus:outline-none 
              focus:ring-0 active:border-primary-accent-200 dark:text-primary-100
               dark:hover:bg-neutral-100 dark:hover:bg-opacity-10
               text-lime-500
               "
              >
                <NavLink to={"/crecipe"}>Create Recipe</NavLink>
              </button>
            </div>

            <div className="w-[700px] h-[200px] border-2 border-black">
              <ListCategories />
              <ListIngredients />
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly"> {recipeList}</div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
