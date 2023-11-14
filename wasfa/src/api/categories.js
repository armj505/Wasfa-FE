import { instance } from ".";

const getAllCategory = async () => {
  const { data } = await instance.get("/api/category");
  return data;
};
const getCategoryById = async (categoryId) => {
  const { data } = await instance.get(`/api/category/${categoryId}`);
  return data;
};
const updtCategory = async (category) => {
  const { data } = await instance.put(
    `/api/category/${category._id}`,
    category
  );
  return data;
};
const delCategory = async (categoryId) => {
  const { data } = await instance.delete(`/api/category/${categoryId}`);
  return data;
};
const createCategory = async (category) => {
  const { data } = await instance.post(`/api/category/`, category);
  return data;
};

export {
  createCategory,
  updtCategory,
  delCategory,
  getAllCategory,
  getCategoryById,
};
