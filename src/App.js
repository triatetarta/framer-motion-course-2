import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop/DragAndDrop';
import Fade from './Fade';
import Feed from './Feed';
import Gallery from './Gallery';
import Loading from './Loading';
import LoginWindow from './LoginWindow';
import Nav from './Nav';
import ScaleCorrection from './ScaleCorrection';
import Slide from './Slide';
import { AnimatedRoutes, RouteTransition } from './AnimatedRoutes';

import './styles.css';
import Countdown from './Countdown';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='App'>
      <Nav />
      <AnimatedRoutes>
        <RouteTransition exact path='/'>
          <main className='layout'>
            <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
            <Fade isActive={isToggled}>
              <div className='card'>
                <h4>Post Number one</h4>
                <p>this is inside the card</p>
              </div>
            </Fade>
            <Slide direction={1} isActive={isToggled}>
              <div className='card'>
                <h4>Post Number one</h4>
                <p>this is inside the card</p>
              </div>
            </Slide>
            <Slide direction={-1} distance={500} isActive={isToggled}>
              <div className='card'>
                <h4>Post Number one</h4>
                <p>this is inside the card</p>
              </div>
            </Slide>
          </main>
        </RouteTransition>

        <RouteTransition path='/gallery'>
          <Gallery />
        </RouteTransition>

        <RouteTransition path='/scale'>
          <ScaleCorrection />
        </RouteTransition>

        <RouteTransition path='/loading'>
          <Loading />
        </RouteTransition>
      </AnimatedRoutes>

      <RouteTransition path='/feed'>
        <Feed />
      </RouteTransition>

      <RouteTransition path='/dragdrop'>
        <DragAndDrop />
      </RouteTransition>

      <RouteTransition path='/login'>
        <LoginWindow />
      </RouteTransition>

      <RouteTransition path='/countdown'>
        <Countdown />
      </RouteTransition>
    </div>
  );
};

export default App;
