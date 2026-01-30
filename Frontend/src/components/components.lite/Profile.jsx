import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React, { useState } from "react";
import profilephoto from "../../assets/profilephoto.jpg";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import Appliedjobs from "./Appliedjobs";
import EditProfiileModal from "./EditProfiileModal";
import { useSelector } from "react-redux";

// const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Python"];

const isResume = true;
const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-400 hover:shadow-[#00A264]">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer h-24 w-24 rounded-full border border-gray-300 shadow-lg">
              <AvatarImage
                className="h-24 w-24 rounded-full border border-gray-300 shadow-lg"
                src={profilephoto}
                alt="@maxleiter"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen />
          </Button>
        </div>

        <div>
          <div className="flex-items-center gap-3 mt-4">
            <Mail />
            <span className="">
              <a href={"mailto:" + user?.email}>{user?.email}</a>
            </span>
          </div>
          <div className="flex-items-center gap-3 mt-2">
            <Contact />
            <span>
              <a href={`tel:${user?.phoneNumber}`}>{user?.phoneNumber}</a>
            </span>
          </div>
        </div>

        <div>
          <h1 className="font-semibold mb-2 mt-5">Skills</h1>

          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <span
                  key={index}
                  className="bg-black text-white px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))
            ) : (
              <span>No skills added yet.</span>
            )}
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-md font-bold mt-5">Upload Resume</label>

            <div>
              {isResume ? (
                <Button
                  className=" bg-[#00A264] text-white cursor-pointer"
                  target="_blank"
                  href={user?.profile?.resume}
                  variant="outline"
                >
                  Download
                </Button>
              ) : (
                <span>No resume uploaded yet.</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-lg my-5  font-bold">Applied Jobs</h1>
        <Appliedjobs />
      </div>
      <EditProfiileModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
