import { instance } from ".";

const getAllIngredient = async () => {
  const { data } = await instance.get("/api/ingredient");
  return data;
};
const getIngredientById = async (IngredientId) => {
  const { data } = await instance.get(`/api/ingredient/${IngredientId}`);
  return data;
};
const updtIngredient = async (ingredient) => {
  const { data } = await instance.put(
    `/api/ingredient/${ingredient._id}`,
    Ingredient
  );
  return data;
};
const delIngredient = async (ingredientId) => {
  const { data } = await instance.delete(`/api/ingredient/${ingredientId}`);
  return data;
};
const createIngredient = async (ingredient) => {
  const { data } = await instance.post(`/api/ingredient/`, ingredient);
  return data;
};

export {
  createIngredient,
  updtIngredient,
  delIngredient,
  getAllIngredient,
  getIngredientById,
};
