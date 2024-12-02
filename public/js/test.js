socket = io();

socket.on('connect', this.messenger.setBoard);

function hi() {
    socket.emit('Hi', {name: 'John'}, (error) => {
        console.log(error)
    });
}

function bye(){
    socket.emit('Bye', {name: 'John'}, (error) => {
        console.log(error)
    });
}

function callname(){
    socket.emit('Name', {name: 'John'}, (error) => {
        console.log(error)
    });
}

document.querySelector('.hi').addEventListener('click', hi);
document.querySelector('.bye').addEventListener('click', bye);
document.querySelector('.name').addEventListener('click', callname);