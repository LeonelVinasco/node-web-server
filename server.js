const express=require('express');
const hbs =require('hbs');
var app = express();

app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));
var data= {
  name:'leo',
  gustos:[
    'ciclismo',
    'helados'
  ]
}

var datos=JSON.stringify(data);
app.get('/',(req,res)=>{

  res.render('home.hbs', {
    pageTitle:'Welcome to my site',
    currentYear: new Date().getFullYear(),
    datos,
    data
  });

  //res.send('<h1>Hello Express</h1>');
  //res.send();
});

app.get('/about',(req,res)=>{
  res.render('about.hbs', {
    pageTitle:'Leo`s About Page',
    currentYear: new Date().getFullYear()

  });
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage: '404 not found',
    statusCode: 'Failed'
  });
});

app.listen(3000,()=>{console.log('Server is up in port 3000');});
