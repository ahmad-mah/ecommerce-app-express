import mongoose from "mongoose";
import Product from "../models/product.js";
import Cart from "../models/cart.js";

const addToCart = async (body, userId) => {
  const { id, quantity } = body;
  const quantityNumber = Number(quantity);

  _validateIdAndQuantity(id, quantityNumber);
  const product = await _validateProduct(id, quantityNumber);

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = await Cart.create({
      user: userId,
      items: [],
    });
  }

  const existingItem = cart.items.find(
    (item) => item.product.toString() === id,
  );
  const totalQuantity = existingItem
    ? existingItem.quantity + quantityNumber
    : quantityNumber;

  if (product.stock < totalQuantity) {
    throw new Error("Insufficient stock");
  }
  if (existingItem) {
    existingItem.quantity += quantityNumber;
  } else {
    cart.items.push({
      product: id,
      quantity: quantityNumber,
      price: product.price,
    });
  }

  cart.totalPrice = cart.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  await cart.save();

  return cart;
};

const getCart = async (userId) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");

  return cart;
};

async function _validateProduct(id) {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
}

function _validateIdAndQuantity(id, quantity) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product id");
  }

  if (!id) {
    throw new Error("Product id required");
  }

  if (isNaN(quantity)) {
    throw new Error("Invalid quantity");
  }

  if (quantity <= 0) {
    throw new Error("Quantity must be greater than 0");
  }
}

export default {
  addToCart,
  getCart,
};
