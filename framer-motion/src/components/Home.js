import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const buttonVariants = {
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],  //keyframes
  //   transition: { delay: 2 }
  // },
  hover: {
    // scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1], //keyframes
    scale: 1.1,
    textShadow: '0px 0px 0px rgb(255,255,255)',
    color: 'yellow',
    transition: {
      yoyo: Infinity,
      duration: 0.3
    }
  }
}
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 variants={containerVariants} initial='hidden' animate='visible' exit='exit'>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover='hover' animate='visible'>
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;