import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <>
      <div className="w-[100px] flex-wrap justify-evenly border-2 border-black mb-2 bg-white">
        {category?.name}
      </div>
    </>
  );
};

export default CategoryItem;
