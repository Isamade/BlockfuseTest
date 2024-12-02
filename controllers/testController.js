import Game from '../models/Test.js';

export const sayHi = async (options) => {
    console.log('Hi', options);
    const game = new Game({
        name: options.name
    });
}

export const sayBye = async (options) => {
    console.log('Bye', options);
    const game = new Game({
        name: options.name
    });
}

export const sayName = async (options) => {
    console.log('Name', options);
    const game = new Game({
        name: options.name
    });
}