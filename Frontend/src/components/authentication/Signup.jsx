import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import Illustration from "../../assets/signup-illustration.svg";

/* =======================
   Framer Motion Variants
======================= */
const leftVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
};

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    pancard: "",
    adharcard: "",
    file: null,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  /* =======================
     Handlers
  ======================= */
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("pancard", input.pancard);
    formData.append("adharcard", input.adharcard);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) formData.append("file", input.file);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Signup failed. Try again.",
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* ================= LEFT: SIGNUP FORM ================= */}
      <motion.div
        variants={leftVariant}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-center px-6"
      >
        <form onSubmit={submitHandler} className="w-full max-w-md space-y-4">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <p className="text-gray-500">Create your account to get started</p>

          <div>
            <Label>Full Name</Label>
            <Input
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Himesh Verma"
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="••••••••"
            />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
            />
          </div>

          {/* Role */}
          <div>
            <Label className="block mb-2">Role</Label>
            <div className="flex gap-6 text-sm">
              {["Student", "Recruiter"].map((role) => (
                <label
                  key={role}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={input.role === role}
                    onChange={changeEventHandler}
                  />
                  {role}
                </label>
              ))}
            </div>
          </div>

          {/* Profile Photo */}
          <div>
            <Label>Profile Photo</Label>
            <Input type="file" accept="image/*" onChange={changeFileHandler} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-black text-white font-medium
                       hover:bg-gray-900 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-black">
              Login
            </Link>
          </p>
        </form>
      </motion.div>

      {/* ================= RIGHT: ILLUSTRATION ================= */}
      <motion.div
        variants={rightVariant}
        initial="hidden"
        animate="visible"
        className="hidden lg:flex items-center justify-center bg-[#F3FBF6]"
      >
        <div className="text-center max-w-sm">
          <img
            src={Illustration}
            alt="illustration"
            className="mx-auto mb-6 w-80"
          />

          <h2 className="text-xl font-semibold mb-2">Make your work easier</h2>
          <p className="text-gray-600">
            Manage your profile and opportunities in one place.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
