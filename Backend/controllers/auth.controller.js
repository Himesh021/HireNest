import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import User from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // 1. find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // 2. check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 2. CREATE TOKEN (THIS IS THE LINE YOU ASKED ABOUT)
    const token = jwt.sign(
      { userId: user._id },               // ✅ VERY IMPORTANT
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 3. SAVE TOKEN IN COOKIE
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // set to true in production with HTTPS
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        profile: user.profile,
      },
      token: token,
    });

  } catch (error) {
    return res.status(500).json({ message: "Login failed" });
  }
};
