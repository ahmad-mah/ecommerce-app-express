import productService from "../services/product.service.js";

const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({
      message: "Product created Successfully",
      product,
    });
  } catch (err) {
    next(err);
  }
};

export { getProducts, createProduct };
