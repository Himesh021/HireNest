
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/cloud.js";
import getDataUri from "../utils/datauri.js";
//register controller
export const  register = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);
    const { fullname, email, phoneNumber, password, role } = req.body;
    if(!fullname || !email || !phoneNumber || !password || !role){
      return res.status(400).json({
         message: "All fields are required",
        success: false,
      });
    }
    if(role !== "Student" && role !== "Recruiter"){
      return res.status(400).json({
         message: "Invalid role selected",
        success: false,
      });
    }
    const file = req.file;
    let profilePhotoUrl = "";
    if (file) {
      try {
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        profilePhotoUrl = cloudResponse.secure_url;
      } catch (uploadError) {
        console.error("File upload failed:", uploadError.message);
        // Continue without file upload if it fails
      }
    }
    const existingUser = await User.findOne({
      $or: [{ email }, { phoneNumber }]
    });
//point for learning--->
    if (existingUser) {
      return res.status(400).json({
        message: "User with this email or phone number already exists",
        success: false,
      });
    }
    //convert password to hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
       profilePhoto: profilePhotoUrl,
      },
      
    });
    return res.status(201).json({
      message: `Account created successfully for ${fullname}`,
      success: true,
      user: await newUser.save(),
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    }); 
  }
};
//login controller
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;  
    console.log(email, password, role);
     
    if(!email || !password || !role){
      return res.status(400).json({
         message: "All fields are required",
        success: false,
      });
    } 
   let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(404).json({
        message: "Invalid email or password",
        success: false,
      });
    }
    // Check for role match
    if (user.role !== role) {
      return res.status(403).json({
        message: `User does not have the ${role} role`,
        success: false,
      });
    }
    // Generate JWT token
    const tokenData={
      userId: user._id,
      role: user.role,
    }
    const token = await jwt.sign(
      tokenData,
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    user={
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    //for security purpose httpOnly is set to true
    res.status(200).cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "Strict",
    })
    .json({
      message: `Welcome back ${user.fullname}`,
       user,
      success: true,
     
    });

  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ 
      message: "Internal server error",
      success: false,
    });
  }
}
//logout controller
export const logout = async (req, res) => {
  try {
    res.status(200).cookie("token", "", {
      maxAge: 0,
    }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error during user logout:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
} ;

//Update user profile controller
export const updateProfile = async (req, res) => {
  try {
    const { fullname,email,phoneNumber,bio, skills} = req.body; 
    const file= req.file; // Access the uploaded file
    // if(!fullname || !email || !phoneNumber|| !bio || !skills){
    //   return res.status(400).json({
    //     message: "All fields are required",
    //     success: false,
    //   });
    // }
   
    //cloudinary upload
    let cloudinaryResponse;
    if(file){
      try {
        const fileUri = getDataUri(file);
        cloudinaryResponse=await cloudinary.uploader.upload(fileUri.content);
      } catch (cloudinaryError) {
        console.log("Cloudinary upload failed:", cloudinaryError.message);
        // Continue without file upload if Cloudinary fails
      }
    }
    let skillsArray = [];
    if(skills){
      skillsArray = skills.split(',');//declaring skillsArray
    }
    
    const userId = req.id;//middleware authentication se req.id me user id set krta h

    let  user = await User.findById (userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    // Initialize profile if it doesn't exist
    if (!user.profile) {
      user.profile = {};
    }
    // Update database profile
    if(fullname){
      user.fullname = fullname;
    }
    if(email){
      user.email = email;
    }
    if(phoneNumber){
      user.phoneNumber = phoneNumber;
    }
    
    if(bio){
      user.profile.bio = bio;
    }
    if(skills){
      user.profile.skills = skillsArray;
    }

    //resume
    if(cloudinaryResponse){
      user.profile.resume = cloudinaryResponse.secure_url;
      user.profile.resumeOriginalname=file.originalname;
    }
    
    await user.save();
    
    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error during profile update:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};