import userService from "../services/user.service.js";

const createUserController = async (req, res) => {
  try {
    const user = await userService.createUserService(req.body);

    res.status(201).json(user);
  } catch (error) {}
};
const getUserByIdController = async (req, res) => {
  try {
    const users = await userService.getUserService(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json(users);
  } catch (error) {}
};
const getUsersController = async (req, res) => {
  try {
    const users = await userService.getUsersService();

    res.status(200).json(users);
  } catch (error) {}
};

export default {
  createUserController,
  getUserByIdController,
  getUsersController,
};
