import Product from "../models/product.model.js";

const getAllProducts = async () => {
  return await Product.findAll();
};

const createProduct = async (data) => {
  const { name, price } = data;

  if (!name || !price) {
    throw new Error("Name and price are required");
  }

  return await Product.create({ name, price });
};

const getProductById = async (id) => {
  return await Product.findByPk(id);
};

const updateProduct = async (id, data) => {
  const product = await Product.findByPk(id);

  await product.update(data);

  return product;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  await product.destroy();
};

export default {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
