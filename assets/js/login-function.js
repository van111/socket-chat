function _proceed() {
    console.log('login');
  socket.emit('login', document.getElementById('username').value);
}