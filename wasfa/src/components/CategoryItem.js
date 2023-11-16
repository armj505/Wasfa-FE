import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <>
      <div className="w-auto flex-wrap justify-evenly text-start ps-4 ">
        <li>{category?.name}</li>
      </div>
    </>
  );
};

export default CategoryItem;
