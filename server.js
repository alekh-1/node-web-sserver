const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();
app.set('view engine', 'hbs'); //specify the type of file to be used

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('upperCase', (text) => text.toUpperCase());


app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now} : ${req.method} ${req.url}`);
  next();
});

// app.use((req, res, next) => {
//   res.render('site.hbs')
// })
//pop
//
//




// app.get('/about', (req, res) => {
//   res.send("About Page");
// });

app.get('/', (req, res) => {
  res.send("Hello World");

});
app.get('/about', (req, res) => {
  res.render('aboutPage.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  })
});

app.get('/welcome', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Welcome Page',
    message: "This is the welcome page",
  
  })
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Github Projects',
    message: 'You can see my Github projects here',
  })
});

app.get('/bad', (req, res) => {
  res.send( {
    error: 'error in loading page'
  })
});

app.listen(port, () => {
  console.log(`Server up on port ${port}`);
});
