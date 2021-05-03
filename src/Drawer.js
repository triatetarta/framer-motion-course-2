import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Drawer = ({ isActive, setIsActive, children }) => {
  return (
    <AnimatePresence>
      {isActive && (
        <>
          <motion.div
            drag='y'
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 350) setIsActive(false);
            }}
            className='drawer-wrapper'
          >
            <motion.div
              initial={{ opacity: 0.5, y: '110%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.5, y: '110%' }}
              transition={{ damping: 25, type: 'spring' }}
            >
              <div className='drawer'>
                <button
                  className='drawer--close'
                  onClick={() => setIsActive(false)}
                >
                  X
                </button>
                {children}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className='drawer--background'
            onClick={() => setIsActive(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
