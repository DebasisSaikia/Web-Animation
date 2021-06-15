import { motion, useAnimation } from "framer-motion";
import React from "react";

const FramerHook = () => {
  const control = useAnimation();
  return (
    <div className="btn">
      <button
        onClick={() => {
          control.start({
            x: 100,
            transition: { duration: 2 },
          });
        }}
      >
        Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Left
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            borderRadius: "10rem",
            transition: { duration: 2 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box-container" animate={control}></motion.div>
    </div>
  );
};

export default FramerHook;
