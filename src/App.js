import React, { useState} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const onClickHandler = e => {
    e.preventDefault();
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is paragraph</p>}
      <DemoOutput show={false} />
      <Button onClick={onClickHandler}>Show paragraph</Button>
    </div>
  );
}

export default App;
