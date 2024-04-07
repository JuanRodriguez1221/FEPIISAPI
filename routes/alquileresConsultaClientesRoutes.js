const express = require("express");
const AlquilerConsulta = require("../models/alquileresConsultaClientesModel");
const router = express.Router();

// Mostrar todos los alquileres
router.get("/alquileres", async (req, res) => {
    try {
        const data = await AlquilerConsulta.find().select("-__v").maxTimeMS(60000);
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No se encontraron datos" });
        }
        return res.json(data);
    } catch (error) {
        console.error("Error al buscar documentos:", error);
        return res.status(500).json({ message: "Error al buscar documentos", error: error.message });
    }
});


// Crear un nuevo alquiler
router.post("/alquileres", (req, res) => {
    const nuevoAlquiler = new AlquilerConsulta(req.body);
    nuevoAlquiler.save()
        .then((alquilerGuardado) => res.json(alquilerGuardado))
        .catch((error) => res.status(500).json({ message: error.message }));
});

// Obtener un alquiler por su ID
router.get("/alquileres/:id", (req, res) => {
    const { id } = req.params;
    AlquilerConsulta.findById(id)
        .then((data) => {
            if (!data) {
                return res.status(404).json({ message: "Alquiler no encontrado" });
            }
            res.json(data);
        })
        .catch((error) => {
            console.error("Error al buscar alquiler por ID:", error);
            res.status(500).json({ message: "Error al buscar alquiler por ID", error: error.message });
        });
});

// Eliminar un alquiler por su ID
router.delete("/alquileres/:id", (req, res) => {
    const { id } = req.params;
    AlquilerConsulta.deleteOne({ _id: id })
        .then((data) => {
            if (data.deletedCount === 0) {
                return res.status(404).json({ message: "Alquiler no encontrado" });
            }
            res.json({ message: "Alquiler eliminado correctamente" });
        })
        .catch((error) => {
            console.error("Error al eliminar alquiler por ID:", error);
            res.status(500).json({ message: "Error al eliminar alquiler por ID", error: error.message });
        });
});

// Actualizar un alquiler por su ID
router.put("/alquileres/:id", (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    AlquilerConsulta.updateOne({ _id: id }, newData)
        .then((data) => {
            if (data.nModified === 0) {
                return res.status(404).json({ message: "Alquiler no encontrado o ningún campo fue modificado" });
            }
            res.json({ message: "Alquiler actualizado correctamente" });
        })
        .catch((error) => {
            console.error("Error al actualizar alquiler por ID:", error);
            res.status(500).json({ message: "Error al actualizar alquiler por ID", error: error.message });
        });
});

module.exports = router;
