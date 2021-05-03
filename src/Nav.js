import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <h1 className='fake-logo'>Level Up</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/scale'>Scale</Link>
        <Link to='/feed'>feed</Link>
      </nav>
    </header>
  );
};

export default Nav;
