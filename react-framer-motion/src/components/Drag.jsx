import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const Drag = () => {
  return (
    <>
      <motion.div
        drag
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="box-container"
      >
        <div className="box"></div>
      </motion.div>
    </>
  );
};

export default Drag;
