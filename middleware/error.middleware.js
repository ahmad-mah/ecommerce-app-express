const errorHandler = (err, req, res, next) => {
  console.log(err.message);

  res.status(500).json({
    message: err?.message ?? "something went wrong",
  });
};

export default errorHandler;
