import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInterval from '@use-it/interval';
import Confetti from 'react-confetti';

const Countdown = () => {
  const [count, setCount] = useState(10);
  const [isComplete, setIsComplete] = useState(false);

  useInterval(() => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      setIsComplete(true);
    });
  }, 1000);

  return (
    <div className='countdown'>
      {isComplete && <Confetti />}
      <AnimatePresence>
        <motion.h2
          exit={{ y: 20, opacity: 0, position: 'absolute' }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          key={'countdown' + count}
          className='h2'
        >
          {count}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default Countdown;
