import * as http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import { sayHi, sayBye, sayName } from './controllers/testController.js';

const server = http.createServer(app);
const io = new Server(server);

io.sockets.on('connection', (client) => {

    client.on('Hi', async(options, callback) => {
        sayHi(options);
        callback('Hi Error');
    });

    client.on('Bye', async(options, callback) => {
        sayBye(options);
        callback('Bye Error');
    });

    client.on('Name', async(options, callback) => {
        sayName(options);
        callback('Name Error');
    });

});


server.listen(3000, () => { console.log(`Server is up on port 3000!`) });