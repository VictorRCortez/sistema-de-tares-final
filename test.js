const connectDB = require('./backend/database');
const Task = require('./backend/models/task.model');
// Conectarse a la base de datos y guardar una tarea
const run = async () => {
  await connectDB(); // Esperar a que la conexión se establezca
  const nuevaTarea = new Task({
    title: 'Conexion con mongo atlas',
    description: 'Crear un proyecto, crear un cluster, agregar la ip de red, usar la cadena de conexion',
  });

  await nuevaTarea.save(); // Esperar a que se guarde la tarea
  console.log('Tarea guardada:', nuevaTarea);
};
// Ejecutar la función async
run().catch(console.error);