$(function() {
  socket.on('success-logged-in', function(data) {
  console.log('data login ', data);
    if (data.status === 200) {
      window.location.href = window.location.protocol+'/index';
      val = data.username;
    }
  });

  socket.on('user-list', function(data) {
    var div = document.getElementById('chat_people');
    var result = '';
    if (data.status === 200) {
      if (data.list.length > 0) {
        data.list.map(function(val){
          result += '<div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div><div class="chat_ib"><h5>'+val+'<span class="chat_date">-</span></h5><p>Test, this is a dummy text only.</p></div>';
        });
        div.innerHTML = result;
      }
    }
  });

    socket.on('joiner', (data) => {
      var elem = document.getElementById('msg_history');
      elem.append(data + ' has joined');
    });
  })
