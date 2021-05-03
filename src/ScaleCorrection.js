import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ScaleCorrection = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='App'>
      <main className='layout'>
        <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>

        <motion.div layout className='card'>
          <motion.h4 layout>Post Number one</motion.h4>
          {isToggled && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              earum, excepturi repudiandae fugit praesentium hic, nulla cumque
              amet vel temporibus quam quae perferendis dicta. Dolorem velit
              adipisci nesciunt quisquam provident quaerat, aspernatur maiores
              praesentium reprehenderit aliquid consectetur assumenda totam
              perspiciatis dolor, labore quae a harum! Nam nesciunt tempora rem
              quo!
            </p>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default ScaleCorrection;
