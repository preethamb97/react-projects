const logger = require('./src/core/logger');
const { API_PORT, IS_HTTPS } = require('./src/config/settings');
const chatHistoryQueryLib = require('./src/library/queryLib/mysql/queries/userChat');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const app = require('express')();
const server = (IS_HTTPS) ? require('https').createServer({
  key: fs.readFileSync('/home/ubuntu/certs/server.key'),
  cert: fs.readFileSync('/home/ubuntu/certs/server.crt')
}, app) : require('http').createServer(app);
const cors = require('cors')

const io = require('socket.io')(server, { 'pingTimeout': 10000, 'pingInterval': 3000 });

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.get('/', async (req, res) => {
  res.status(404).send('<h1>Page not Found</h1>');
});

io.on('connection', async (socket) => {
  socket.on('message', async ({ name, message }) => {
    io.emit('message', { name, message });
    await chatHistoryQueryLib.insertNewChat({ name, message });
  });
});

server.listen(API_PORT, () => {
  logger.info(`App running on port ${API_PORT}`);
});