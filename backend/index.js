const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  console.log("Intento de acceso al backend")
  try{
    release.user = req.body.user;
    release.password = req.body.password;
    if (release.user === 'admin' && release.password === 'kawabonga87') {
      res.send('Acceso concedido al backend');
    }
    else {
      res.send('Contraseña incorrecta, vuelva a intentarlo');
    }
  }
  catch(e){
    res.send('Debe ingresar con datos de acceso');
  }
});

app.listen(4000, () => console.log('Backend normal en puerto 3000'));