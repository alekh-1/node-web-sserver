const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'hbs'); //specify the type of file to be used

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now} : ${req.method} ${req.url}`);
  next();
})

app.use((req, res, next) => {
  res.render('site.hbs')
})

app.get('/', (req, res) => {
  res.send({
    name: 'Alekh',
    title: {
      inside: "hello"
    }
  });
});

// app.get('/about', (req, res) => {
//   res.send("About Page");
// });

app.get('/about', (req, res) => {
  res.render('aboutPage.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
});

app.get('/welcome', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Welcome Page',
    message: "Chant Hare Krishna",
    currentYear: new Date().getFullYear()
  })
})
app.get('/bad', (req, res) => {
  res.send( {
    error: 'error in loading page'
  })
});
app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
