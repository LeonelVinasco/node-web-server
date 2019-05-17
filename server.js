const express=require('express');
const hbs =require('hbs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase()
});


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
    pageTitle:'Leos site',
    welcomeMessage:'Welcome to my website',
    currentYear: new Date().getFullYear(),
    datos,
    data
  });

  //res.send('<h1>Hello Express</h1>');
  //res.send();
});

app.get('/about',(req,res)=>{
  res.render('about.hbs', {
    welcomeMessage:'Welcome to my website',
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

app.listen(3002,()=>{console.log('Server is up in port 3000');});
