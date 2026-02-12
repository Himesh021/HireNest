import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { toast } from "sonner";
import axios from "axios";
import { AUTH_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser, setToken } from "@/redux/authSlice.js";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(`${AUTH_API_ENDPOINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        dispatch(setToken(res.data.token));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : "Something went wrong";
      toast.error(message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Email */}
        <div className="mb-5">
          <Label className="text-gray-300">Email</Label>
          <Input
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="johndoe@gmail.com"
            className="mt-2 bg-white/10 border-none text-white placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#00A264]"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <Label className="text-gray-300">Password</Label>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="********"
            className="mt-2 bg-white/10 border-none text-white placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#00A264]"
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <Label className="text-gray-300">Select Role</Label>

          <RadioGroup className="flex gap-6 mt-3">
            {["Student", "Recruiter"].map((role) => (
              <label
                key={role}
                className={`px-5 py-2 rounded-full cursor-pointer border text-sm transition
                ${
                  input.role === role
                    ? "bg-[#00A264] text-white border-[#00A264]"
                    : "border-gray-600 text-gray-300 hover:border-[#00A264]"
                }`}
              >
                <input
                  type="radio"
                  value={role}
                  name="role"
                  checked={input.role === role}
                  onChange={changeEventHandler}
                  className="hidden"
                />
                {role}
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Button */}
        {loading ? (
          <div className="flex justify-center py-3">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#00A264] border-t-transparent" />
          </div>
        ) : (
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
            bg-[#00A264] hover:bg-[#009056] transition shadow-lg shadow-[#00A264]/30"
          >
            Login →
          </button>
        )}

        {/* Signup */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#00A264] hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

// // /
//       import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup } from "../ui/radio-group";
// import { toast } from "sonner";
// import axios from "axios";
// import { AUTH_API_ENDPOINT } from "@/utils/data.js";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser, setToken } from "@/redux/authSlice.js";

// const Login = () => {
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//     role: "",
//   });

//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { loading, user } = useSelector((store) => store.auth);

//   const changeEventHandler = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       dispatch(setLoading(true));

//       const res = await axios.post(`${AUTH_API_ENDPOINT}/login`, input, {
//         headers: { "Content-Type": "application/json" },
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         dispatch(setUser(res.data.user));
//         dispatch(setToken(res.data.token));
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       const message = error.response
//         ? error.response.data.message
//         : "Something went wrong";
//       toast.error(message);
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   useEffect(() => {
//     if (user) navigate("/");
//   }, [user]);

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center
// bg-gradient-to-br from-white via-[#E6F7F0] to-white px-4"
//     >
//       <form
//         onSubmit={submitHandler}
//         className="w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8"
//       >
//         {/* Heading */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-black">Welcome Back</h1>
//           <p className="text-black text-sm mt-1">Sign in to your account</p>
//         </div>

//         {/* Email */}
//         <div className="mb-5">
//           <Label className="text-black-300">Email</Label>
//           <Input
//             name="email"
//             value={input.email}
//             onChange={changeEventHandler}
//             placeholder="johndoe@gmail.com"
//             className="mt-2 bg-white/10 border-none text-white placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#00A264]"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-5">
//           <Label className="text-black-300">Password</Label>
//           <Input
//             type="password"
//             name="password"
//             value={input.password}
//             onChange={changeEventHandler}
//             placeholder="********"
//             className="mt-2 bg-white/10 border-none text-white placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-[#00A264]"
//           />
//         </div>

//         {/* Role */}
//         <div className="mb-6">
//           <Label className="text-black-300">Select Role</Label>

//           <RadioGroup className="flex gap-6 mt-3">
//             {["Student", "Recruiter"].map((role) => (
//               <label
//                 key={role}
//                 className={`px-5 py-2 rounded-full cursor-pointer border text-sm transition
//                 ${
//                   input.role === role
//                     ? "bg-[#00A264] text-white border-[#00A264]"
//                     : "border-gray-600 text-black-300 hover:border-[#00A264]"
//                 }`}
//               >
//                 <input
//                   type="radio"
//                   value={role}
//                   name="role"
//                   checked={input.role === role}
//                   onChange={changeEventHandler}
//                   className="hidden"
//                 />
//                 {role}
//               </label>
//             ))}
//           </RadioGroup>
//         </div>

//         {/* Button */}
//         {loading ? (
//           <div className="flex justify-center py-3">
//             <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#00A264] border-t-transparent" />
//           </div>
//         ) : (
//           <button
//             type="submit"
//             className="w-full py-3 rounded-xl font-semibold text-white
//             bg-[#00A264] hover:bg-[#009056] transition shadow-lg shadow-[#00A264]/30"
//           >
//             Login →
//           </button>
//         )}

//         {/* Signup */}
//         <p className="text-center text-gray-400 text-sm mt-6">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-[#00A264] hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
// /
