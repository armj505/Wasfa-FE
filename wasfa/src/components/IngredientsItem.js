import React from "react";

const IngredientsItem = ({ ingredients }) => {
  return (
    <>
      <div className="w-auto flex-wrap justify-evenly text-start ps-4 ">
        <li>{ingredients?.name}</li>
      </div>
    </>
  );
};

export default IngredientsItem;
