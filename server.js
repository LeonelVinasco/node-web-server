const express=require('express');
var app = express();

app.get('/',(req,res)=>{
  //res.send('<h1>Hello Express</h1>');
  res.send({
    name:'leo',
    gustos:[
      'ciclismo',
      'helados'
    ]
  });
});

app.get('/about',(req,res)=>{
  res.send('<h1>about</h1>');
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage: '404 not found',
    statusCode: 'Failed'
  });
});

app.listen(3000);
