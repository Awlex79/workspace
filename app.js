const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs' );
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const page404 = require('./controllers/404-controller')

app.use(bodyParser.urlencoded({extended: true}));

//access to public folder(fs)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(page404.err404);

app.listen(3000);