import React from "react";
import { motion } from "framer-motion";

const Variants = () => {
  const boxVariants = {
    hidden: {
      x: "-500px",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div
        className="box-container"
        variants={boxVariants}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              key={box.id}
              className="items"
              variants={itemVariants}
            ></motion.li>
          );
        })}
      </motion.div>
    </>
  );
};

export default Variants;
