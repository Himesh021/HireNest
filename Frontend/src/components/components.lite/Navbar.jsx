import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });

      if (response.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logout out successfully");
      } else {
        toast.error("Failed to log out");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Hire<span className="text-[#00A264]">NEST</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8 text-black-600 font-medium">
          {user && user.role === "Recruiter" ? (
            <>
              <li className="hover:text-[#228B22] transition">
                <Link to={"/admin/companies"}>Companies</Link>
              </li>
              <li className="hover:text-[#228B22] transition">
                <Link to={"/admin/jobs"}>Jobs</Link>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-[#228B22] transition">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#228B22] transition">
                <Link to="/">Community</Link>
              </li>

              <li className="hover:text-[#228B22] transition">
                <Link to="/browse">Browse</Link>
              </li>
              <li className="hover:text-[#228B22] transition">
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="hover:text-[#228B22] transition">
                <Link to="/">Companies</Link>
              </li>
            </>
          )}
        </ul>
        {!user ? (
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-5 py-3 text-sm font-medium text-black-900 hover:text-[#00A264] transition"
            >
              {""}
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 text-sm font-medium text-white bg-[#000000] rounded-md hover:bg-[#00A264] transition"
            >
              {""}
              Sign up
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                <AvatarFallback>
                  {user?.fullname
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div
                className="absolute right-4 top-14 w-64 rounded-xl 
                    bg-black/95 text-gray-100
                    border border-white/10 
                    shadow-2xl backdrop-blur-md overflow-hidden"
              >
                {/* User Info */}
                <div className="flex items-center gap-4 p-4 border-b border-white/10">
                  <Avatar className="h-10 w-10 cursor-pointer ring-1 ring-white/20">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="Himesh Verma"
                    />
                    <AvatarFallback className="bg-white/10 text-white">
                      {user?.fullname
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <div className="leading-tight">
                    <h3 className="font-semibold text-sm tracking-wide">
                      {user?.fullname}
                    </h3>
                    <p className="text-xs text-white/60 truncate">
                      {user?.email}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col py-2 text-sm">
                  {/* Profile */}
                  {user && user.role === "Student" && (
                    <div
                      className="flex items-center gap-3 px-4 py-2 cursor-pointer
                     text-white/80 hover:text-white
                     hover:bg-white/10 transition"
                      onClick={() => navigate("/profile")}
                    >
                      <User2 size={18} />
                      <span>Profile</span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="my-1 h-px bg-white/10" />

                  {/* Logout */}
                  <div
                    className="flex items-center gap-3 px-4 py-2 cursor-pointer
                     text-white/70 hover:text-red-400
                     hover:bg-red-500/10 transition"
                    onClick={logoutHandler}
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}

        {/* Auth Buttons */}
        {/* <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-black-700 hover:text-[#228B22] transition"
          >
            Login
          </Link

          <Link
            to="/signup"
            className="px-5 py-2 text-sm font-medium text-white bg-[#000000] rounded-md hover:bg-green-700 transition"
          >
            Sign Up
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
