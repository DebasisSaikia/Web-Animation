import React from "react";
import { motion } from "framer-motion";

const KeyFrame = () => {
  return (
    <>
      <motion.div
        className="box-container"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["10%", "20%", "50%", "50%", "10%"],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </>
  );
};

export default KeyFrame;
