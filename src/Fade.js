import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Fade = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default Fade;
