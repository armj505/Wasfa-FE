import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../api/recipes";
import RecipeItem from "./RecipeItem";

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
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto max-w-7x1 bg-gray-300">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0 flex flex-wrap gap-4">
            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 ">
              All Recipes
            </h1>
            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 hover:text-indigo-500">
              <NavLink to={"/crecipe"}>Create Recipe</NavLink>
            </h1>
          </div>
          <div className="h-1 w-[100px] bg-indigo-500 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-white p-6 rounded-lg">
              <img
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                src="https://www.shugarysweets.com/wp-content/uploads/2020/05/chocolate-chip-cookies-recipe-500x500.jpg"
                alt="Image Size 720x400"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                Cook Time:
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font">
                Recipe title
              </h2>
              {recipeList}
              <p className="leading-relaxed text-base mb-2">
                Discreption: Fingerstache flexitarian street art 8-bit
                waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
              <div className="flex justify-center items-center ">
                <button
                  type="button"
                  class="inline-block  text-center rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-indigo-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <NavLink to={"/crecipe"}> View Recipe</NavLink>
                </button>
              </div>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
