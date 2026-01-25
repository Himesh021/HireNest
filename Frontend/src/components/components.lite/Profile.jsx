import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Mail, Phone, Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Profile = () => {
  const user = useSelector((store) => store.auth.user);
  const [editing, setEditing] = useState(false);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl font-semibold">
        Please login to view your profile 🔐
      </div>
    );
  }

  const skills = user?.profile?.skills || [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Tailwind CSS",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start border-b pb-6">
        <div className="flex gap-5 items-center">
          <Avatar className="w-24 h-24 ring-4 ring-green-200">
            <AvatarImage
              src={user?.profile?.photo || "https://github.com/maxleiter.png"}
              alt="profile"
            />
            <AvatarFallback>{user.fullName?.charAt(0)}</AvatarFallback>
          </Avatar>

          <div>
            <h2 className="text-2xl font-bold">{user.fullName}</h2>
            <p className="text-gray-500 mt-1">
              {user?.profile?.bio || "Lorem ipsum dolor sit amet"}
            </p>

            <div className="mt-4 space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>{user.phoneNumber}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setEditing(!editing)}
        >
          <Pencil size={16} /> Edit
        </Button>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6"
      >
        <h3 className="font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-black text-white rounded-full text-sm shadow"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Resume Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h3 className="font-semibold mb-2">Resume</h3>
        {user?.profile?.resume ? (
          <a
            href={user.profile.resume}
            download
            className="text-green-600 font-medium hover:underline"
          >
            Download
          </a>
        ) : (
          <p className="text-gray-400">No resume uploaded</p>
        )}
      </motion.div>

      {/* Edit Mode Placeholder */}
      {editing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-4 border rounded-lg bg-gray-50"
        >
          <p className="font-medium mb-2">Edit Profile (Coming Soon 🔧)</p>
          <p className="text-sm text-gray-500">
            Next step: connect this form with your backend `/profile/update`
            API.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Profile;
