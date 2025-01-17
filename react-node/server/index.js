const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();



//Hacer que node sirva los archivos de app react
app.arguments(express.static(path.resolve(__dirname, '../client/build')));

//Manejar las peticiones GET en la ruta /api
app.get('/api', (req, res)=> {
    res.json({ message: 'Saludando desde el servidor'});
});
//Todas las peticiones GET que no hayamos manejado en las lineas anteriores retornaran nuestro app React
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});