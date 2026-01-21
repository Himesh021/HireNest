import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components.lite/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice.js";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files[0],
    });
  };

  //api call on submit
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);

      const message = error.response
        ? error.response.data.message
        : "An unexpected error occurred. Please try again.";

      toast.error(message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center text-blue-600">
            Login
          </h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="johndoe@gamil.com"
            ></Input>
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              type="password"
              placeholder="********"
            ></Input>
          </div>

          <div className="flex items-center justify-between ">
            <Label>Role</Label>
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              className="block w-3/4 py-3 my-3  text-white flex items-center justify-center  max-w-7xl mx-auto 
    bg-blue-600 hover:bg-blue-800/90 rounded-md "
            >
              Login
            </button>
          )}

          {/*No account then sign up*/}
          <div>
            <p className=" text-gray-500 text-center my-2">
              Create New Account{" "}
              <Link to="/signup" className="text-blue-700">
                <button
                  className="block w-1/2 py-3 my-3  text-white flex items-center justify-center max-w-7xl mx-auto 
    bg-green-600 hover:bg-green-800/90 rounded-md "
                >
                  Sign Up
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
