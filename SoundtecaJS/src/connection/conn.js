const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:daniel101002@clustermongodb.sgp3kqo.mongodb.net/soundteca';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexión exitosa a la base de datos');
})
.catch((error) => {
  console.error('Error de conexión a la base de datos:', error);
});