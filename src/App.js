import React from 'react';
import './App.css';
import FrozenDept from './componets/FrozenDept'
import MeatDept from './componets/MeatDept'
import ProduceDept from './componets/ProduceDept'


function App() {
  return (
    <div className="App">
      <FrozenDept />
      <MeatDept />
      <ProduceDept />
    </div>
  );
}

export default App;
