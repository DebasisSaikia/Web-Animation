import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const buttonVariants = {
  // visible: {
  //   x: [0, -20, 20, -20, 20, 0],  //keyframes
  //   transition: { delay: 2 }
  // },
  hover: {
    scale: [1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1], //keyframes
    textShadow: '0px 0px 0px rgb(255,255,255)',
    color: 'yellow'
  }
}

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 initial={{ y: -300 }} animate={{ y: 0, fontSize: 40 }} transition={{ delay: 0.5, duration: 1.5 }}>
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