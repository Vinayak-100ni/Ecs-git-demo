const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const tutorialRoutes = require("./app/routes/tutorial.routes");
app.use("/api/tutorials", tutorialRoutes);

// Health check route
app.get("/health", (req, res) => res.send("OK"));

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
