import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}
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

const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring', stiffness: 120
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    // initial={{ x: '100vw' }} animate={{ x: 0 }}

    <motion.div className="base container" variants={containerVariants} initial='hidden' animate='visible' exit='exit' transition={{ type: 'tween', delay: 0.5, duration: 1 }}>
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ type: 'spring', stiffness: 120 }}>
          <Link to="/toppings">
            <motion.button variants={buttonVariants} whileHover='hover'>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;