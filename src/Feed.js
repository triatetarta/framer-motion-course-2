import React, { useState } from 'react';
import Drawer from './Drawer';
import DrawerTwo from './Drawer2';

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Feed = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='App'>
      <div className='layout'>
        <h3>Blog Posts</h3>
        {/* <button onClick={() => setIsActive(true)}>Open Drawer</button> */}

        {/* <Drawer isActive={isActive} setIsActive={setIsActive}>
          <h1>I am in the drawer</h1>
          <p>Hello what's up</p>
        </Drawer> */}

        <DrawerTwo>
          <h1>I am in the drawer 2</h1>
          <p>Hello what's up</p>
        </DrawerTwo>

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
