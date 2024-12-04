import { useState } from 'react';
import './App.css';
import Button from './Button';
import ToDo from './ToDo';
import Profile from './Profile';

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
 
  return (
    <>
      <h2>User Profile</h2>
      <button onClick={changeToggleStatus}>Toggle Status</button>
      <button onClick={changeUser}>Switch User</button>

      <p>{status ? 'active' : 'inactive'}</p>

      <Profile name={user} />


      {/* <Button />
      
      <br/><br/>

      <ToDo /> */}
    </>
  )
}

export default App
