const express = require("express");
const conectarMongoDB = require("./mongoConnection"); // Importamos la función para conectar a MongoDB
const alquileresConsultaClientesRoutes = require("./routes/alquileresConsultaClientesRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", alquileresConsultaClientesRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

conectarMongoDB().then(() => {
    app.listen(port, () => {
        console.log("Server listening to", port);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
