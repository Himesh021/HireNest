import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { useSelector } from "react-redux";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";

const EditProfiileModal = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: user?.fullname || "",
    email: user?.email || "",
    phone: user?.phoneNumber || "",
    bio: user?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "",
    file: null,
  });

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ ADD THIS

    try {
      const formData = new FormData();
      formData.append("fullname", input.name);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phone);
      formData.append("bio", input.bio);
      formData.append("skills", input.skills);

      if (input.file) {
        formData.append("file", input.file);
      }

      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          withCredentials: true,
        },
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false); // optional but good UX
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // ✅ ADD THIS
    }
  };

  const FileChangehandler = (e) => {
    const file = e.target.files?.[0];
    setInput({
      ...input,
      file,
    });
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-[500px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your personal information below.
            </DialogDescription>
          </DialogHeader>
          {/* Form of editting profile */}
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <input
                  type="text"
                  id="name"
                  value={input.name}
                  name="name"
                  onChange={changeEventHandler}
                  className="col-span-3 bg-white text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Email
                </Label>
                <input
                  type="email"
                  id="email"
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  className="col-span-3 bg-white text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Phone
                </Label>
                <input
                  type="tel"
                  id="phone"
                  value={input.phone}
                  name="phone"
                  onChange={changeEventHandler}
                  className="col-span-3 bg-white text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Bio
                </Label>
                <input
                  type="text"
                  id="bio"
                  value={input.bio}
                  name="bio"
                  onChange={changeEventHandler}
                  className="col-span-3 bg-white text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <input
                  type="text"
                  id="skills"
                  value={input.skills}
                  name="skills"
                  onChange={changeEventHandler}
                  className="col-span-3 bg-white text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="application/pdf"
                  onChange={FileChangehandler}
                  className="col-span-3 bg-white text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <div className="flex items-center justify-center my-6">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span className="ml-2 text-sm text-gray-300">Saving...</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="block w-full max-w-md mx-auto my-4 py-3 rounded-md 
               bg-black text-white font-medium 
               hover:bg-gray-900 transition 
               flex items-center justify-center"
                >
                  Save
                </button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfiileModal;
