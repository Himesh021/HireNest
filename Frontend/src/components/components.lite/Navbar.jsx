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

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Hire<span className="text-[#00A264]">NEST</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-8 text-black-600 font-medium">
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
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex  items-center gap-4 space-x-4 p-4">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/maxleiter.png"
                    alt="@maxleiter"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Himesh verma</h3>
                  <p className="text-sm text-muted-foreground">
                    himeshverma@example.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-2 text-gray-600 cursor-pointer space-y-2 px-4">
                <div
                  className="flex w-fit items-center gap-2 cursor-pointer hover:text-black"
                  onClick={() => {
                    console.log("CLICKED PROFILE");
                    navigate("/profile"); // 🔥 DIRECT ROUTER NAVIGATION
                  }}
                >
                  <User2 />
                  <span>Profile</span>
                </div>

                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut></LogOut>
                  <Button
                    variant="link"
                    onClick={() => {
                      dispatch(setUser(null));

                      navigate("/login");
                    }}
                  >
                    Logout
                  </Button>
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
