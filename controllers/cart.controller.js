import cartService from "../services/cart.service.js";

const addToCartController = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await cartService.addToCart(req.body, userId);

    res.status(200).json({
      message: "Item added to cart successfully",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCartController = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await cartService.getCart(userId);

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default {
  addToCartController,
  getCartController,
};
