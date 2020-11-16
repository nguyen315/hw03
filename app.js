const express = require('express');
const bodyParser = require('body-parser');
var productRoute = require('./routes/products.route');
var userRoute= require('./routes/users.router');

const app = express();
const port = 3000;


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));


app.set('view engine', 'pug')
app.set('views', './views');




app.get('/', (req, res) => {
  res.render('index');
})
app.use('/products', productRoute);
app.use('/users',userRoute);


app.listen(port, () => {
  console.log(`Running on port 3000`)
})