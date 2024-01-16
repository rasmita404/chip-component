import React, { useState } from 'react';
import ChipComponent from './Components/ChipComponent.tsx';
import './App.css';

const items = [
  { name: 'John Doe', id: 1 },
  { name: 'Jane Smith', id: 2 },
  { name: 'Alice Brown', id: 3 },
  { name: 'Bob Johnson', id: 4 },
  { name: 'Charlie Miller', id: 5 },
  { name: 'David Williams', id: 6 },
  { name: 'Emily Davis', id: 7 },
  { name: 'Frank Jackson', id: 8 },
  { name: 'Grace Thomas', id: 9 },
  { name: 'Henry Garcia', id: 10 },
  { name: 'Isabella Rodriguez', id: 11 },
  { name: 'Jack Wilson', id: 12 },
  { name: 'Kate Anderson', id: 13 },
  { name: 'Logan Taylor', id: 14 },
  { name: 'Mary White', id: 15 },
  { name: 'Noah Harris', id: 16 },
  { name: 'Olivia Martin', id: 17 },
  { name: 'Peter Thompson', id: 18 },
  { name: 'Quinn Garcia', id: 19 },
  { name: 'Robert Jackson', id: 20 },
  { name: 'Samantha Rodriguez', id: 21 },
  { name: 'Thomas Wilson', id: 22 },
  { name: 'Uma Anderson', id: 23 },
  { name: 'Vanessa Taylor', id: 24 },
  { name: 'William White', id: 25 },
  { name: 'Xander Harris', id: 26 },
  { name: 'Yvonne Martin', id: 27 },
  { name: 'Zoe Thompson', id: 28 }
];

const App = () => {
  const [selectedChips, setSelectedChips] = useState([]);

  const handleChipChange = (newChips) => {
    setSelectedChips(newChips);
  };

  return (
    <>
      <ChipComponent items={items} onChipChange={handleChipChange} />
    </>
  );
};

export default App;
