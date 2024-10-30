const express = require('express');
const path = require('path');

// instancia de router
const router = express.Router();

// pagina1
router.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'pag1.html'));
});

//pagina2
router.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'pag2.html'));
});

//pagina3
router.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'pag3.html'));
});

module.exports = router;