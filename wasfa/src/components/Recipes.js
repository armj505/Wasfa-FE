import { NavLink, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipes";
import RecipeItem from "./RecipeItem";
import React, { useState } from "react";
import ListCategories from "./ListCategories";
import ListIngredients from "./ListIngredients";

const Recipes = () => {
  const [query, setQuery] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();
  const filter = searchParam.get(`filter`);
  const { data: recipeList_ } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getRecipes(),
  });

  const recipes =
    query !== ""
      ? recipeList_
          ?.filter((recipe) => recipe.title.includes(query))
          .map((recipe) => <RecipeItem recipe={recipe} key={recipe._id} />)
      : recipeList_?.map((recipe) => {
          console.log(recipe.title);
          return <RecipeItem recipe={recipe} key={recipe._id} />;
        });

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
              <input
                className=" w-full mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                placeholder="Search Transactions"
                onChange={(e) => setQuery(e.target.value)}
              ></input>
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
            <div className="flex">
              <div className="w-auto border-2  flex flex-col py-4 px-4">
                <ListCategories />
                <ListIngredients />
              </div>
              <div className="flex w-full justify-evenly">{recipes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
