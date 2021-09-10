import React, { useState, useEffect } from 'react';
import Tweet from './tweet';
import './App.css';
function App() {
  const [getColor, setColor] = useState(false);
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

  const ColorSet = () => {
    setColor(!getColor);
  };

  useEffect(() => {
    console.log(getColor);
    document.title = new Date();
  }, [getColor, users]);
  return (
    <div onClick={ColorSet} className={getColor ? 'blueapp' : 'greenapp'}>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;