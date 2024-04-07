const express = require("express");
const { dbConnection } = require("./mongoConnection");
const alquileresConsultaClientesRoutes = require("./routes/alquileresConsultaClientesRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api", alquileresConsultaClientesRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to my API(alquileres)");
});

// Manejo de errores al conectar a la base de datos
dbConnection().then(() => {
    app.listen(port, () => {
        console.log("Server listening on port", port);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Salir del proceso con código de error
});
