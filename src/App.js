import './App.css';
import React from 'react';
import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';


function App() {

  const handleBtnUp = () => {
    setCounter(counter + 1);
  }

  const handleBtnDown = () => {
    setCounter(counter - 1);
  }

  const handleBtnreset = () => {
    setCounter(0)
  }

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>My Counter</h1>
      <div className='main-container'>
        <Display counterValue={counter} />
        <div className='btn-group'>
          <Button
            text='Up'
            styleBtn='btn-up'
            clickHandler={handleBtnUp}
          />
          <Button
            text='Down'
            styleBtn='btn-down'
            clickHandler={handleBtnDown}
          />
        </div>

        <Button
          text='Reset'
          styleBtn='btn-reset'
          clickHandler={handleBtnreset}
        />
      </div>

    </div>
  );
}

export default App;
