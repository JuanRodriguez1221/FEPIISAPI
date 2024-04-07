const express = require("express");
const AlquilerConsulta = require("../models/alquileresConsultaClientesModel");
const router = express.Router();

// Crear un nuevo alquiler
router.post("/alquileres", (req, res) => {
    const nuevoAlquiler = new AlquilerConsulta(req.body);
    nuevoAlquiler.save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener todos los alquileres
router.get("/alquileres", (req, res) => {
    AlquilerConsulta.find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener un alquiler por su ID
router.get("/alquileres/:id", (req, res) => {
    const { id } = req.params;
    AlquilerConsulta.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Eliminar un alquiler por su ID
router.delete("/alquileres/:id", (req, res) => {
    const { id } = req.params;
    AlquilerConsulta.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Actualizar un alquiler por su ID
router.put("/alquileres/:id", (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    AlquilerConsulta.findByIdAndUpdate(id, newData, { new: true })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error.message }));
});


module.exports = router;
