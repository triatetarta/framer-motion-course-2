import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Fade from './Fade';
import Gallery from './Gallery';
import Loading from './Loading';
import ScaleCorrection from './ScaleCorrection';
import Slide from './Slide';

import './styles.css';

const App = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='App'>
      <header>
        <h1 className='fake-logo'>level up</h1>
      </header>
      <Switch>
        <Route exact path='/'>
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
        </Route>

        <Route path='/gallery'>
          <Gallery />
        </Route>

        <Route path='/scale'>
          <ScaleCorrection />
        </Route>

        <Route path='/loading'>
          <Loading />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
