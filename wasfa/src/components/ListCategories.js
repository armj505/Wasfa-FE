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
    <>
      <h1 className="text-md mb-2 text-left px-2 text-blacks text-lg">
        Category List:
      </h1>
      <div className="flex flex-row gap-2 px-2">{categoryList}</div>
    </>
  );
};

export default ListCategories;
