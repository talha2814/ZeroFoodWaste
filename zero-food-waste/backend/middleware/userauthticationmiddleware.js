const jwt = require('jsonwebtoken');

const userAuthenticationMiddleware = (req, res, next) => {
  try {
    // Typically, the token is sent in an authorization header
    const token = req.headers.authorization.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded;
    
    next();
  } catch (error) {
    console.error('Error in userAuthenticationMiddleware', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = userAuthenticationMiddleware;
