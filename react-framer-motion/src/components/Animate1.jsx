import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Animate1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ x: 1000, y: -100, opacity: 1, scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="box-container"
    >
      <div className="box"></div>
    </motion.div>
  );
};

export default Animate1;
