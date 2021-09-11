const app = require('express')();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  console.log('connection recieved')
  socket.on('message', ({ name, message }) => {
    console.log('message recieved', { name, message })
    io.emit('message', { name, message });
  });
});

http.listen(4000, () => {
  console.log('app running on port 4000');
});