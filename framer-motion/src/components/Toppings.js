import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li whileHover={{ scale: 1.5, color: 'yellow', originX: 0 }} transition={{ type: 'spring', stiffness: 300 }} key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </div>
  )
}

export default Toppings;