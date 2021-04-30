import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slide = ({ children, isActive, direction = 1, distance = 200 }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: direction * distance }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -distance }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
