import { motion } from "framer-motion";

const tags = [
  { text: "SaaS", x: -200, y: -120 },
  { text: "React Developer", x: -300, y: 40 },
  { text: "iOS Developer", x: 280, y: -100 },
  { text: "Artificial Intelligence", x: 320, y: 80 },
  { text: "Cyber Security", x: -100, y: 180 },
  { text: "Flutter Developer", x: 200, y: 200 },
];

const FloatingTags = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {tags.map((tag, i) => (
        <motion.div
          key={i}
          className="absolute px-5 py-2 bg-white shadow-md rounded-full text-sm text-gray-700"
          style={{ left: "50%", top: "50%" }}
          initial={{ x: tag.x, y: tag.y, opacity: 0 }}
          animate={{
            x: [tag.x, tag.x + 20, tag.x - 20, tag.x],
            y: [tag.y, tag.y - 20, tag.y + 20, tag.y],
            opacity: 1,
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tag.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTags;
