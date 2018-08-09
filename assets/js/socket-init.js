var socket = io.connect('http://localhost:3000');

socket.emit('test-socket', 'Connecting to server');
socket.on('test-socket', function(data) {
  if (data.status === 200) {
    console.log(data.message);
  }
});
