import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;

    console.log("AUTH HEADER:", authHeader);
    console.log("COOKIES:", req.cookies);

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else {
      return res.status(401).json({
        message: "Unauthorized: No Bearer token or cookie",
        success: false
      });
    }

    console.log("TOKEN:", token);

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
