const express = require('express');
const router = express();

const { create, index, find, update, destroy } = require('./controller');
// const { } = require('../../../middlewares.auth');

router.post('/categories', create);
// route baru untuk mendapatkan daftar categories
router.get('/categories', index);
// Route baru untuk mencari berdasarkan ID 
router.get('/categories/:id', find);
// Route baru untuk update data 
router.put('/categories/:id', update);
// Route baru untuk delete 
router.delete('/categories/:id', destroy);

module.exports = router;