import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

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
      // delay: 0.5,
      mass: 0.4, //higher mass moves slower and lower mass moves faster
      damping: 9, //if it is higher the oscillation will stop bit quickly(spring bouncing)
      when: 'beforeChildren',  //before any animation occurs
      staggerChildren: 0.4  //stagger or delay the properties of all the children
    }
  },
  exit: {
    opacity: 0
  }

}


const childVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
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

const Order = ({ pizza, setShowModal }) => {

  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false)
  }, 2000)

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal])

  return (
    <motion.div className="container order" variants={containerVariants} initial='hidden' animate='visible'>
      <AnimatePresence>
        {showTitle && (<motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>)}
      </AnimatePresence>
      <motion.p variants={childVariants} exit='exit'>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;