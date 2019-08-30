var express = require('express');

var app = express(),
    server = app.listen(7000,function(){
        console.log('正在监听');
    });
    app.use(express.static('public'));
    console.log(4);
