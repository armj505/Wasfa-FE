import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

import { useQuery } from "@tanstack/react-query";
import { getAllCategory } from "../api/categories";

const ListCategories = () => {
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: () => getAllCategory(),
  });

  const categoryList = categories?.map((category) => (
    <CategoryItem category={category} key={category.__id} />
  ));
  console.log(categoryList);

  return (
    <div className="">
      <h1 className="text-xl mb-4 text-left px-4 text-black font-semibold">
        Category List:
      </h1>
      <div className="flex  flex-col gap-4 px-4">{categoryList}</div>
    </div>
  );
};

export default ListCategories;
