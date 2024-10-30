const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/routes'); // importar rutas

const app = express();
const PORT = 3021;

// hacer los archivos en la carpeta public estaticos para que puedan ser accedidos
app.use(express.static('public'));

// Usar las rutas del archivo pages.js
app.use('/', pagesRoutes);

// Redirección automática desde la raíz a la Página 1
app.get('/', (req, res) => {
    res.redirect('/page1');
});

app.listen(PORT, () => {
    console.log(`El servidor está en funcionamiento: http://localhost:${PORT}`);
});