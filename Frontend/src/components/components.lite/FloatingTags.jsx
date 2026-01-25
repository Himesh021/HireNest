import { motion } from "framer-motion";

const tags = [
  { text: "SaaS", x: -220, y: -140 },
  { text: "React Developer", x: -320, y: 20 },
  { text: "iOS Developer", x: 300, y: -120 },
  { text: "Artificial Intelligence", x: 340, y: 90 },
  { text: "Cyber Security", x: -140, y: 200 },
  { text: "Flutter Developer", x: 220, y: 220 },

  // 🔥 New tags
  { text: "Full Stack Developer", x: -20, y: -220 },
  { text: "Flutter Devs", x: 120, y: -40 },
  { text: "Blockchain Developer", x: -260, y: 120 },
  { text: "Web3", x: 260, y: 20 },
  { text: "Austin", x: 60, y: 260 },
  { text: "DevOps Engineer", x: -180, y: -60 },
  { text: "Data Scientist", x: 180, y: -200 },
  { text: "UI/UX Designer", x: 0, y: 160 },
  { text: "Remote Jobs", x: -300, y: -220 },
  { text: "Entry Level", x: 320, y: 220 },
  { text: "JavaScript", x: -80, y: 80 },
  { text: "Python Developer", x: 80, y: -80 },
  { text: "Cloud Engineer", x: -40, y: -160 },
];

const FloatingTags = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {tags.map((tag, i) => (
        <motion.div
          key={i}
          className="
            absolute px-5 py-2 
            bg-white/80 text-green-600 
            shadow-lg rounded-full 
            text-sm font-medium 
            cursor-pointer
            transition-colors duration-300
            hover:bg-green-500 hover:text-black
          "
          style={{ left: "50%", top: "50%" }}
          initial={{ x: tag.x, y: tag.y, opacity: 0, scale: 0.9 }}
          animate={{
            x: [tag.x, tag.x + 25, tag.x - 25, tag.x],
            y: [tag.y, tag.y - 25, tag.y + 25, tag.y],
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
          }}
        >
          {tag.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTags;
