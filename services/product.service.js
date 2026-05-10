import Product from "../models/product.model.js";
import mongoose from "mongoose";

const createProductService = async (data) => {
  return await Product.create(data);
};

const getAllProductsService = async () => {
  return await Product.find().populate("user", "name email").lean();
};

const getProductByIdService = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return null;
  }
  return await Product.findById(id).populate("user", "name email").lean();
};

const updateProductService = async (id, updatedData) => {
  return await Product.findByIdAndUpdate(id, updatedData);
};

const deleteProductService = async (id) => {
  return await Product.findByIdAndDelete(id);
};

export default {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
};
