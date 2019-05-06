const express=require('express');
const hbs =require('hbs');
var app = express();

app.use(express.static(__dirname+'/public'));

app.set('view engine','hbs');

app.get('/',(req,res)=>{


  res.send('<h1>Hello Express</h1>');
  res.send({
    name:'leo',
    gustos:[
      'ciclismo',
      'helados'
    ]
  });
});

app.get('/about',(req,res)=>{
  res.send('<h1>about, page</h1>');
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage: '404 not found',
    statusCode: 'Failed'
  });
});

app.listen(3000,()=>{console.log('Server is up in port 3000');});
