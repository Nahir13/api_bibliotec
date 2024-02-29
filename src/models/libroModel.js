const mongoose = require('mongoose');
require('dotenv').config()

// Conectarse a la base de datos
mongoose.connect('mongodb://localhost:27017/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;