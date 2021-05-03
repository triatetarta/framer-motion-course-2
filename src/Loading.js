import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className='loading'>
      <h3>Level Up Tutorials</h3>
      <p>Is Loading...</p>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{
          flip: Infinity,
          duration: 1,
        }}
        style={{
          background: 'var(--primary)',
          height: 6,
          width: 100,
        }}
      />
      <motion.div
        initial={{ x: -180, y: -5 }}
        animate={{ x: 180, y: -5 }}
        transition={{
          flip: Infinity,
          duration: 1.2,
        }}
        style={{
          background: 'var(--danger)',
          height: 8,
          width: 20,
        }}
      />
      <motion.div
        initial={{ x: -100, y: -5 }}
        animate={{ x: 100, y: -5 }}
        transition={{
          flip: Infinity,
          duration: 1.5,
        }}
        style={{
          background: 'var(--yellow)',
          height: 4,
          width: 200,
        }}
      />
    </div>
  );
};

export default Loading;
