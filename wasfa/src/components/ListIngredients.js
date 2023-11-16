import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllIngredient } from "../api/ingredients";
import IngredientsItem from "./IngredientsItem";

const ListIngredients = () => {
  const { data: ingredients } = useQuery({
    queryKey: ["ingredients"],
    queryFn: () => getAllIngredient(),
  });

  const ingredientList = ingredients?.map((ingredient) => (
    <IngredientsItem ingredients={ingredients} key={ingredients.__id} />
  ));
  console.log(ingredientList);
  return (
    <>
      <h1 className="text-md mb-2 text-left px-2 text-blacks text-lg">
        Ingredient List:
      </h1>
      <div className="flex flex-row gap-2 px-2">{ingredientList}</div>
    </>
  );
};

export default ListIngredients;
