export const Authorization = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      status: 401,
      error: 'Unauthorized Access',
    });
  }
  if (token) {
    if (token === process.env.AUTHORIZATION_KEY) {
      return next();
    } else {
      return res.status(401).json({
        status: 401,
        error: 'Unauthorized Access',
      });
    }
  }
};