import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { createRecipe } from "../api/recipes";

const CreateRecipe = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      console.log(e.target.value);
    }
  };

  const { mutate: createRecipefn, error } = useMutation({
    mutationKey: ["createRecipe"],
    mutationFn: () => createRecipe(userInfo),
    onSuccess: () => setUser(true),
  });
  const handleForm = (e) => {
    e.preventDefault();
    createRecipefn();
    navigate("/recipes");
  };
  return (
    <div
      class="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg")`,
      }}
    >
      <div className="container mx-auto max-w-7x1 bg-gray-300">
        <div className="flex flex-wrap w-full p-4 ">
          <div className="w-full mb-6 lg:mb-0 flex flex-wrap gap-4 justify-between">
            <form onSubmit={handleForm} className="mt-8 mx-auto">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900  ">
                Create Recipe
              </h1>
              <div className="flex justify-center items-center h-1 w-[100px] bg-indigo-500 rounded "></div>
              <label
                htmlFor="RecipeTitle"
                className="my-4 flex content-center gap-4"
              >
                <span className="w-1/3 self-center text-sm font-medium">
                  Recipe Title:
                </span>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>

              <label
                htmlFor="serving"
                className="my-4 flex content-center gap-4"
              >
                <span className="w-1/3 self-center text-sm font-medium">
                  Serving:
                </span>
                <input
                  type="text"
                  id="serving"
                  name="serving"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>

              <label
                htmlFor="instructions"
                className="my-4 flex content-center gap-4"
              >
                <span className="w-1/3 self-center text-sm font-medium">
                  Instructions:
                </span>
                <input
                  type="text"
                  name="instructions"
                  id="instructions"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>

              <label
                htmlFor="ingredients"
                className="my-4 flex content-center gap-4"
              >
                <span className="w-1/3 self-center text-sm font-medium">
                  Ingredients:
                </span>
                <input
                  name="ingredients"
                  id="ingredients"
                  type="text"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>
              <label
                htmlFor="category"
                className="my-4 flex content-center gap-4"
              >
                <span className="w-1/3 self-center text-sm font-medium">
                  Category:
                </span>
                <input
                  name="category"
                  id="category"
                  type="text"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>
              <label htmlFor="file" className="my-4 flex content-center gap-4">
                <span className="w-1/3 self-center text-sm font-medium">
                  Image:
                </span>
                <input
                  name="image"
                  id="imagefile"
                  type="file"
                  onChange={handleChange}
                  className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  required
                ></input>
              </label>

              <button
                type="submit"
                onClick={createRecipe}
                className="bg-white py-2 px-4 rounded-lg hover:bg-yellow-500 hover:text-black w-full my-8"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipe;
