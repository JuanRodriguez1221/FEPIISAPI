// // const express = require("express");
// // const mongoose = require("mongoose");
// // require("dotenv").config();
// // const enseresRoute = require("./routes/enseres");

// // const app = express();
// // const port = process.env.PORT || 3000;

// // app.use(express.json());
// // app.use("/api", enseresRoute);

// // app.get("/", (req, res) => {
// // res.send("Welcome to my API");
// // });

// // mongoose
// // .connect(process.env.MONGODB_URI)
// // .then(() => console.log("Connected to MongoDB Atlas"))
// // .catch((error) => console.error(error));

// // app.listen(port, () => console.log("Server listening to", port));

// const express = require('express');
// const conectarMongoDB = require('./mongoConnection'); // Importa la función de conexión a MongoDB
// require('dotenv').config(); // Para cargar las variables de entorno desde un archivo .env
// const AlquileresConsultaClientesRoutes = require("./routes/alquileresConsultaClientes");

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Conectar a MongoDB
// conectarMongoDB()
//     .then(() => {
//         // Configurar rutas
//         app.get('/', (req, res) => {
//             res.send('¡API en Node.js con MongoDB Atlas!');
//         });

//         // Configurar middleware
//         app.use(express.json());
//         app.use("/api", AlquileresConsultaClientesRoutes);
//         console.log('Acede');

//         // Iniciar el servidor
//         app.listen(PORT, () => {
//             console.log(`Servidor corriendo en el puerto ${PORT}`);
//         });
//     })
//     .catch(error => {
//         console.error("No se pudo conectar a MongoDB:", error);
//         // En caso de que no se pueda conectar a MongoDB, el servidor no iniciará
//     });

// // Manejar errores de conexión a MongoDB
// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection at:', promise, 'reason:', reason);
//     // Deberías manejar los errores de conexión a MongoDB aquí
// });


const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const alquileresConsultaClientesRoutes = require("./routes/alquileresConsultaClientesRoutes"); // Corrección aquí

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", alquileresConsultaClientesRoutes); // Utiliza el nombre correcto de las rutas

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening to", port));
