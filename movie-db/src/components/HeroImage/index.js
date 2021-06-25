import React from "react";
import { motion } from "framer-motion";
import { HeroBody, HeroContainer, Text } from "./Hero.style";
import Fade from "react-reveal/Fade";

const HeroImage = ({ image, title, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <HeroContainer image={image}>
        <HeroBody>
          <Fade top cascade>
            <Text>
              <h1>{title}</h1>
              <p>{text}</p>
            </Text>
          </Fade>
        </HeroBody>
      </HeroContainer>
    </motion.div>
  );
};

export default HeroImage;
