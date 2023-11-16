import React from "react";

const IngredientsItem = ({ ingredients }) => {
  return (
    <>
      <div className="w-[100px] flex-wrap justify-evenly border-2 border-black mb-2 bg-white">
        {ingredients?.name}
      </div>
    </>
  );
};

export default IngredientsItem;
