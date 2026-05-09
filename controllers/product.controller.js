import productService from "../services/product.service.js";

const createProductController = async (req, res) => {
  try {
    const product = await productService.createProductService(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllProductsController = async (req, res) => {
  try {
    const products = await productService.getAllProductsService();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProductByIdController = async (req, res) => {
  try {
    const product = await productService.getProductByIdService(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    const product = await productService.updateProductService(
      req.params.id,
      req.body,
    );

    if (!product) {
      res.status(404).json({
        message: error.message,
      });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProductController = async (req, res) => {
  try {
    await productService.deleteProductService(req.params.id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  createProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController,
};
