import { Expanse } from './components/Expanse/Expanse';
import { NewExpanse } from './components/NewExpanse/NewExpanse';
import { useState } from 'react';
const DUMMY = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpanse] = useState(DUMMY);

  const onSave = expanseData => {
    setExpanse((prevData) => {
      return [expanseData, ...prevData]
    });
    console.log('expenses', expenses)
  }
  
  return (
    <div>
      <NewExpanse onSave={onSave}/>
      <Expanse items={expenses}/>
    </div>
  );
}

export default App;
