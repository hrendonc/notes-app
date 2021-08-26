const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

//Initialitations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);  //Creamos el servidor
app.set('views', path.join(__dirname, 'views')) //Le decimos donde se encuentan las vistas
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
})) //Creamos el motor de plantillas
app.set('view engine', '.hbs')

//Midlewares


//Routes



//Static Files


//Server is Listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
});