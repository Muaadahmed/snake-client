const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541 // PORT number here,
  });

  const name = 'MA';
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to snake server...');
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = { connect };