
import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import TextField from '@material-ui/core/TextField';

const socket = io.connect('http://65.0.11.27:4000', { transports: ["websocket"] });

function App() {
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });
  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit('message', { name, message });
    setState({ message: '', name });
  };

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const renderChat = () => {
    return chat.map((data, index) => (
      <div key={index}>
        <h3>
          {data.name}:{data.message}
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            id='outlined-multiline-static'
            variant='outlined'
            value={state.name}
            label="Name"
          />
        </div>

        <div>
          <TextField
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>

      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default App;