import React, { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const Loading = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='App'>
      <AnimateSharedLayout>
        <motion.header layoutId='header' onClick={() => setLoading(true)}>
          <motion.h1 layoutId='logo' className='fake-logo'>
            Level Up Tutorials
          </motion.h1>
        </motion.header>
        <main className='layout'>
          <AnimatePresence exitBeforeEnter>
            {loading && (
              <motion.div
                layoutId='header'
                className='loading'
                onClick={() => setLoading(false)}
              >
                <motion.h3 layoutId='logo'>Level Up Tutorials</motion.h3>
                <motion.div exit={{ opacity: 0 }}>
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
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </AnimateSharedLayout>
    </div>
  );
};

export default Loading;
