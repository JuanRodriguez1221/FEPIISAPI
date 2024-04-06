const { MongoClient } = require('mongodb');

// Cadena de conexión a MongoDB Atlas
const uri = 'mongodb+srv://fepiis:fepi123@cluster0.paupups.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&socketTimeoutMS=60000';

// Crear un cliente de MongoDB
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function conectarMongoDB() {
    try {
        // Conectar al cliente
        await client.connect();
        console.log("Conectado a MongoDB Atlas");
        return client;
    } catch (error) {
        console.error("Error al conectar a MongoDB Atlas:", error);
        throw error; // Re-lanza el error para que sea manejado por quien llame a esta función
    }
}

module.exports = conectarMongoDB;
