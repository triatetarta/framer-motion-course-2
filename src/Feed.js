import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Drawer from './Drawer';

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Feed = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='App'>
      <header>
        <h1 className='fake-logo'>Level Up</h1>
      </header>

      <div className='layout'>
        <h3>Blog Posts</h3>
        <button onClick={() => setIsActive(true)}>Open Drawer</button>

        <Drawer isActive={isActive} setIsActive={setIsActive}>
          <h1>I am in the drawer</h1>
          <p>Hello what's up</p>
        </Drawer>
        {posts.map((post) => (
          <div className='card' key={post}>
            <h4>Post Number one</h4>
            <p>this is inside the card</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
