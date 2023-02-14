import React, { useState, useCallback, useMemo } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoList from './DemoList/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title')
  }, [])

  const listItems= useMemo(() => [5,3,11,23], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems}/>
      <Button onClick={changeTitleHandler}>Change Title</Button><br/>
    </div>
  );
}

export default App;
