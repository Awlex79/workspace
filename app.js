const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const app = express();

//app.engine('pug', require('pug').__express)

/*
HANDLEBARS
app.engine(
    'handlebars',
    expressHbs({
        layoutsDir:'views/layouts/', 
        defaultLayout: 'main-layout',
        extname: 'handlebars'
    }));


app.set('view engine', 'handlebars');
*/

//app.set('view engine', 'pug');

app.set('view engine', 'ejs' );
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));

//access to public folder(fs)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: '404'});
});

app.listen(3000);