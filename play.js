const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");
connect();


setupInput();
// establishes a connection with the game server