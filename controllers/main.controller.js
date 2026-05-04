const mainController = (req, res) => {
  res.status(200).json({
    message: "API is running",
    status: "OK",
  });
};

export default mainController;