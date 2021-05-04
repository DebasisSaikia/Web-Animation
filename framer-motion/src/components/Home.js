import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="home container">
      <motion.h2 initial={{ y: -300 }} animate={{ y: 0, fontSize: 40 }} transition={{ delay: 0.5, duration: 1.5 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{ scale: 1.5 }} transition={{ delay: 1, duration: 1.5 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  )
}

export default Home;