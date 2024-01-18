// En tu archivo principal de rutas (por ejemplo, app.js o routes/index.js)
const express = require("express");
const router = express.Router();

// Importa las rutas existentes
const authRoutes = require("./auth.routes");
const profileRoutes = require("./profile.routes");

// Configura las rutas principales
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

// Agrega otras rutas según sea necesario

module.exports = router;
