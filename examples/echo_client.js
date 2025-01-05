import { Peer } from '../index.js'
import readline from 'node:readline'

// FUNCTIONS --------------------------------------------------------------------------------------

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askForInput(promptStr){
    return new Promise((resolve, reject) => {
        rl.question(promptStr, (input) => {
            resolve(input);
        });
    })
}

// ------------------------------------------------------------------------------------------------

const peer = new Peer({debug: 2});

peer.on('open', async (localId) => {
    console.log(localId);

    // Connect to the server peer whose ID we already know
    const conn = peer.connect('abcdefghijklmnopqrstuvwxyz');

    conn.on('open', async () => {
        conn.on('data', async (data) => {
            console.log(data);

            const newUserInput = await askForInput('>');
            conn.send(newUserInput);
        });

        const userInput = await askForInput('>');
        conn.send(userInput);
    });
})

