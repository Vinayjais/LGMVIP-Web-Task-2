import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';

function App() {
  const dealy = time => new Promise(resolve => setTimeout(resolve, time));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getUsers() {
    setUsers([]);
    setLoading(true);
    const data = (await (await fetch('https://reqres.in/api/users?page=1')).json()).data;
    await dealy(1000);
    setUsers(data);
    setLoading(false);

  }

  return (
    <>
      <div className="App">
        <div className="head"><h1>
          Fetching API With React
        </h1>
          <p> Developed By Vinay Jaiswal</p>

          <button onClick={() => getUsers()} >GET USERS DATA</button></div>
        <h2> Users Details </h2>
        <div className="usercard">
          {users.map(user => (

            <div className="grid">
              <div className="profileimg">
                <img src={user.avatar} alt={user.first_name} />
              </div>
              <div className="information">
                <div className="name">Name : {user.first_name + ' ' + user.last_name}</div>
                <div className="email">Email : {user.email}</div>

              </div>
            </div>

          ))}



        </div>
        <div>
          {loading && (
            <div className="loader">
              <div className="loader-line"></div>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default App;
