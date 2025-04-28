// middlewares/verifyToken.js
import jwt from "jsonwebtoken"

const verifyToken = async(req, res, next) => {
  const authHeader = req.headers.authorization;
 

  // Check if Authorization header exists and starts with Bearer
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  const token = authHeader.split(' ')[1];
 
  try {
   
    const decoded =  jwt.verify(token, process.env.JWT_SECRET_KEY); // Replace with your JWT secret
    console.log(decoded)
    req.user = decoded; // Add user data to request object
    next();
  } catch (err) {
    return res.json({ err: 'Invalid or expired token' });
  }
};
export default verifyToken;
