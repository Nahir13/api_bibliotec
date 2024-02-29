const express = require('express');
const app = express();

// Supongamos que tienes una lista de usuarios en un arreglo
const users = [
  { id: 1, name: 'Usuario1' },
  { id: 2, name: 'Usuario2' },
  { id: 3, name: 'Usuario3' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });

  app.use(express.json());

app.post('/users', (req, res) => {
  const newUser = req.body;
  // Suponiendo que tienes una base de datos o arreglo donde almacenar los usuarios
  // Aquí podrías agregar la lógica para guardar el nuevo usuario
  // Por ahora, simplemente lo agregaremos a la lista de usuarios en memoria
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
      users[index] = { ...users[index], ...updateUser };
      res.json(users[index]);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });

  app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
      const deletedUser = users.splice(index, 1);
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });