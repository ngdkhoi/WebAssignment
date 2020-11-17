const path = require('path');
const express =require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port=3000;

const route =require('./src/routes')

app.use(express.static(path.join(__dirname, 'src/public')))


//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src\\resourses\\views'));

//Route init
route(app);


app.listen(port, ()=>console.log(`Example app listen at http://localhost:${port}`));