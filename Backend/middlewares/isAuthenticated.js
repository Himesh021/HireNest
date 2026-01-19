import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized: No Bearer token",
        success: false
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("DECODED TOKEN:", decoded);

    req.id = decoded.id || decoded.userId; // handles both cases

    if (!req.id) {
      return res.status(401).json({
        message: "Unauthorized: Invalid token payload",
        success: false
      });
    }

    next();
  } catch (error) {
    console.error("JWT ERROR:", error.message);
    return res.status(401).json({
      message: "Unauthorized",
      success: false
    });
  }
};

export default isAuthenticated;
