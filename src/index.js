const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')  //Para guardar los datos de usuarios en una sesion

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
app.set('view engine', '.hbs') //Aplicamos el motor de plantillas


//Midlewares
app.use(express.urlencoded({ extended: false }))  //Para recibir inforación cuando un usuario se registre
app.use(methodOverride('_method')) //Para que los formularios puedan usar los metodos put y delete
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))
//Routes
app.use(require('./routes/index'))
app.use(require('./routes/notes'))
app.use(require('./routes/users'))


//Static Files


//Server is Listening
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'))
});