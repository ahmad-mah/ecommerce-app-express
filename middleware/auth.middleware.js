const validateRegister = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password required",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password too short",
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Missing credentials",
    });
  }

  next();
};

const isAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  next();
};

export { validateRegister, validateLogin, isAuth };
