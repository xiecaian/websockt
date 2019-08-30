console.log(io);
console.log(1);
var socket = io.connect('http://localhost:5000'),
    button = document.getElementsByClassName('button')[0];

socket.emit('chat',{
    a:1,
    b:2
});
socket.emit('chat1',1);
socket.on('chat',function(data){
    console.log(data);
})
console.log(55);
button .addEventListener('click',function(){
    socket.emit('chat',{
        a:1,
        b:2
    });
},false);