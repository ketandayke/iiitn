import jwt from "jsonwebtoken";

// Middleware to check if the user is an admin
export const adminAuth = (req, res, next) => {
  const token = req.headers["authorization"].replace("BEARER","");
  
  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user is admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied! Admins only." });
    }

    // Attach user info to request for further use
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Token verification failed!" });
  }
};

