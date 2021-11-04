const net = require("net");
const {connect} = require('./client');
connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    } else if (key === 'w') {
      console.log(key);
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};
setupInput();
// establishes a connection with the game server