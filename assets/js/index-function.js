getUserList();

function getUserList() {
  socket.emit('get-user-list');
}

 socket.on('user-joined', (data) => {
    document.getElementById('msg_history').append(data + ' has joined');
 });