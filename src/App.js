import './App.css';
import React from 'react';
import User from './User';

function App() {

  const [users, setUsers] = React.useState([]);

  const getUser = React.useCallback(async () => {
    const reponse = await fetch("https://randomuser.me/api/");
    const user = await reponse.json();
    setUsers(prevState => {
      return [...prevState, user.results[0]];
    });
  }, []);

  const empty = React.useCallback(() => {
    setUsers([]);
  }, []);

  return (
    <div className="App">
      <button onClick={() => {
        getUser();
      }}>Get User</button>
      <button className="button" onClick={() => empty()}>Reset</button>
      <div>
        {users.map(user => (<User user={user} key={user.login.uuid} />))}
      </div>
    </div>
  );
}

export default App;
