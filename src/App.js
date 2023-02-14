import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  
  console.log('APP RUNNING')
  const onClickHandler = useCallback(() => {
    if(allowToggle){
      setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }
  }, [allowToggle]);
  
  const allowToggleHandler = () => {
    setAllowToggle(true)
  }


  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is paragraph</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={onClickHandler}>Show paragraph</Button><br/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
    </div>
  );
}

export default App;
