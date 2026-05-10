import User from "../models/user.model.js";

const createUserService = async (data) => {
  return await User.create(data);
};

const getUsersService = async () => {
  return await User.find().lean();
};

const getUserByIdService = async (id) => {
  return await User.findById(id).lean();
};

export default {
  createUserService,
  getUserByIdService,
  getUsersService,
};
