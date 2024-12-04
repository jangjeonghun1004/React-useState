import { useState } from 'react';
import './App.css';
import Button from './Button';
import ToDo from './ToDo';
import Profile from './Profile';
import TempInput from './TempInput';
import UnitSelector from './UnitSelector';
import Form from './Form';

function App() {
  const users = ['james', 'tom', 'jeonghun'];
  const [user, setUser] = useState(users[0]);
  const [status, setStatus] = useState(true);

  const changeToggleStatus = () => {
    setStatus(!status);
  };

  const changeUser = () => {
    setUser(users[(users.indexOf(user) + 1) % users.length]);
  };

  console.log('app rendered.');

  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const convertedTemp = unit === 'Celsius' ? (temperature * 9/5 + 32).toFixed(1) : ((temperature - 32) * 5/9).toFixed(1);
 
  return (
    <>

      <Form />





      {/* <h2>Temperature Convert</h2>
      <p>
        Converted: {temperature ? convertedTemp : '--'}
        {unit === 'Celsius' ? 'F' : 'C'}
      </p>

      <TempInput value={temperature} unit={unit} onChange={setTemperature} />
      <UnitSelector unit={unit} onUnitChange={setUnit} /> */}




      {/* <h2>User Profile</h2>
      <button onClick={changeToggleStatus}>Toggle Status</button>
      <button onClick={changeUser}>Switch User</button>

      <p>{status ? 'active' : 'inactive'}</p>

      <Profile name={user} /> */}





      {/* <Button />
      
      <br/><br/>

      <ToDo /> */}
    </>
  )
}

export default App
