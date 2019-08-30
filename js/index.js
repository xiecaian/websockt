var express = require('express'),
    socketIo = require('socket.io');

    /**设置APP */
var app = express(),
    server = app.listen(5000,function(){
        console.log('正在监听1');
    });
    /**连接前端 */
    app.use(express.static('public'));
/**设置io */
var io = socketIo(server);

io.on('connection',function(socketIo){
    console.log('以连接');
    socketIo.on('chat',function(data){
        console.log(data);
        io.sockets.emit('chat',data);
    });
    
})

/**要连接后才能 否则会报错，不认为是函数
 * socketIo.on('chat',function(data){
        console.log('data');
        io.sockets.emit('chat',data);
    })
*/



