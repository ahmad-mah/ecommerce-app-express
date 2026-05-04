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

export default { getAllProducts, createProduct };
