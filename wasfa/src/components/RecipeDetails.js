import React from "react";
import { useParams } from "react-router-dom";
import { getOneRecipe } from "../api/recipes";
import { useQuery } from "@tanstack/react-query";

const RecipeDetails = () => {
  const { recipeId } = useParams();

  const { data: recipeData } = useQuery({
    queryKey: ["recipes", recipeId],
    queryFn: () => getOneRecipe(recipeId),
  });

  const recipe = recipeData;
  if (!recipe) {
    return <h1>There is no recipe with the id: {recipeId}</h1>;
  }
  const orderedRecipe = recipe?.instructions.sort((a, b) => a.order - b.order);

  return (
    <div className="pt-16 px-32">
      <h1 className="text-5xl font-black">{recipe.title}</h1>
      <p>by {recipe.user}</p>
      <div className="flex justify-between">
        <p className="pt-8 text-gray-600">Servings: {recipe.serving}</p>
        <p className="pt-8 text-gray-600">Category: {recipe.category}</p>
      </div>
      <div className="flex justify-center">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div>
        <h2 className="text-2xl font-bold">Ingredients</h2>
        <ul className="ps-16">
          {recipe.ingredients.map((ing) => (
            <li className="pb-2">
              {ing.qty + " " + ing.measurement + ", " + ing.ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Instructions</h2>
        <ol className="ps-16">
          {orderedRecipe.map((ins) => (
            <li className="pb-2">
              <h4 className="text-xl font-bod pb-2">
                {ins.order + " " + ins.title}
              </h4>
              <p className="ps-8">{ins.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
