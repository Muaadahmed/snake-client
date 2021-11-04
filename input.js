let connection;
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY} = require('./constants');

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if(key === 'w'){
    connection.write(MOVE_UP_KEY);
  } else if(key === 'a'){
    connection.write(MOVE_LEFT_KEY);
  } else if(key === 's'){
    connection.write(MOVE_DOWN_KEY);
  } else if(key === 'd'){
    connection.write(MOVE_RIGHT_KEY);
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  connection = conn;
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = { setupInput };