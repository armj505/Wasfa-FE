import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllIngredient } from "../api/ingredients";
import IngredientsItem from "./IngredientsItem";

const ListIngredients = () => {
  const { data: ingredients } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () => getAllIngredient(),
  });

  const ingredientList = ingredients?.map((ingredients) => (
    <IngredientsItem ingredients={ingredients} key={ingredients.__id} />
  ));
  console.log(ingredientList);
  return (
    <div className="pt-8">
      <h1 className="text-xl font-semibold mb-2 text-left px-2 text-black">
        Ingredient List:
      </h1>
      <div className="flex  flex-col gap-2 px-2">{ingredientList}</div>
    </div>
  );
};

export default ListIngredients;
