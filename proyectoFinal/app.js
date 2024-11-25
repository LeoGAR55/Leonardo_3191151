const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const app = express();

//configuracion para el uso peticiones post
app.use(bodyParser.urlencoded({ extended: false }));
//archivos estaticos en la carpeta public
app.use(express.static('public'));

//platillas que sean dinamicas
app.set('view engine', 'ejs');

//crear la conexion
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '12345', // tu contraseña de MySQL
    database: 'proyecto',
    port: 3306
});


//comprobacion de la conexion de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

//iniciamos el server

//const hostname= '192.168.3.115';
const port = 3009;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});

//index

app.get('/', (req, res) => {
    const query = 'SELECT * FROM alumnos';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});


//agregar usuarios

app.post('/add', (req, res) => {
const { nombre, ap_pat, ap_mat, edad, no_cuenta, email, telefono, carrera } = req.body;
const query = 'INSERT INTO alumnos (nombre, ap_pat, ap_mat, edad, no_cuenta, email, telefono, carrera) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
db.query(query, [nombre, ap_pat, ap_mat, edad, no_cuenta, email, telefono, carrera], (err) =>{
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

//eliminar usuario

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM alumnos WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

//actualizando usuario
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, ap_pat, ap_mat, edad, no_cuenta, email, telefono, carrera } = req.body;
    const query = 'UPDATE alumnos SET nombre = ?, ap_pat = ?, ap_mat = ?, edad = ?, no_cuenta = ?, email = ?, telefono = ?, carrera = ? WHERE id = ?';
    db.query(query, [nombre, ap_pat, ap_mat, edad, no_cuenta, email, telefono, carrera, id], (err, result) => {
        if (err) {
            console.error('Error actualizando alumno:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});