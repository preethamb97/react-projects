import React, { useState } from 'react';
import Tweet from './tweet';
import './App.css';
function App() {
  const [users, setUsers] = useState([{
    name: 'preetham',
    message: 'test message 1',
    likes: '100 likes'
  }, {
    name: 'gautham',
    message: 'test message 2',
    likes: '232 likes'
  }, {
    name: 'pratham',
    message: 'test message 3',
    likes: '453 likes'
  }]);
  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;