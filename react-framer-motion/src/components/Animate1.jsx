import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Animate1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{
        x: isAnimating ? 1000 : 0,
        y: isAnimating ? -100 : 0,
        borderRadius: "10rem",
        opacity: isAnimating ? 1 : 0.7,
        rotate: isAnimating ? 360 : 0,
      }}
      transition={{ type: "spring", stiffness: 50 }}
      className="box-container"
      onClick={() => setIsAnimating(!isAnimating)}
    >
      <div className="box">
        <p className="p_text">I am a Software engineer based in Bangalore</p>
      </div>
    </motion.div>
  );
};

export default Animate1;
