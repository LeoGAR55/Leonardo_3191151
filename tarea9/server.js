const express = require('express'); // importamos express
const path = require("path");

const app = express(); //hacer una instancia de express
const PORT =3000; //definir puerto

const routes = require('./routes');//importar rutas prev definidas
app.use(express.static(path.join(__dirname, 'public'))); //mandar archivos en public

app.use('/', routes);//usar ruitas


//Servidor
app.listen(PORT,()=>{
 console.log(`El servidor esta en funcionamiento: http://localhost:${PORT}`);
});