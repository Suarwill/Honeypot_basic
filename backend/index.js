const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  res.send('Contraseña incorrecta, vuelva a intentarlo');
});

app.listen(4000, () => console.log('Backend normal en puerto 3000'));