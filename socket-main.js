var server = require('./server.js');
var user_list = [];
var username = "";

server.io.on('connection', function(socket){
  socket.on('test-socket', function(data){
    var data = {
      status: 200,
      message: 'Connected to server successfully.',
    };
    socket.emit('test-socket', data);
  });

  socket.on('login', function(data) {
    if (data !== null || data !== undefined) {
      user_list.push(data);
      var return_data = {
        status: 200,
        message: 'User successfully logged in.',
        list: user_list,
        username: data,
      };
      username = data;
      socket.emit('success-logged-in', return_data);

      socket.broadcast.emit('user-list', return_data);
      console.log('CURRENT USER LIST: '+ JSON.stringify(user_list));
    }
  });

  socket.on('get-user-list', function() {
    var data = {
      status: 200,
      message: 'Successfully get user list',
      list: user_list,
    };
    socket.broadcast.emit('joiner', username);
    socket.emit('user-list', data);
  });
});