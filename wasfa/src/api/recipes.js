import { instance } from ".";

const getRecipes = async () => {
  const { data } = await instance.get("/api/recipe");
  return data;
};
const getOneRecipe = async (recipeId) => {
  const { data } = await instance.get(`/api/recipe/${recipeId}`);
  return data;
};
const getUserRecipes = async (recipeId) => {
  const { data } = await instance.get(`/api/recipe/${recipeId}`);
  return data;
};
const createRecipe = async (recipe) => {
  const formData = new FormData();
  for (const key in recipe) formData.append(key, recipe[key]);
  const { data } = await instance.post(`/api/recipe`, formData);
  return data;
};
const updateRecipe = async (recipe) => {
  const formData = new FormData();
  for (const key in recipe) formData.append(key, recipe[key]);
  const { data } = await instance.get(`/api/recipe/${recipe._id}`, formData);
  return data;
};
const deleteRecipe = async (recipeId) => {
  const { data } = await instance.get(`/api/recipe/${recipeId}`);
  return data;
};

export {
  getRecipes,
  getOneRecipe,
  getUserRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
