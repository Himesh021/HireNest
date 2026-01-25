import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Student', 'Recruiter'],
    default: 'Student',
    required: true
  },
  profile: {
    bio: {
      type: String
    },
    skills: [String],

    resume: {
      type: String //url to resume file
    },
    resumeOriginalname: {
      type: String // original name of the resume file
    },
    profilePhoto:{
      type: String, //url to profile photo
      default: "",
    },
  }
},
{timestamps: true}
);

export default mongoose.model('User', userSchema);