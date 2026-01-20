const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get("/api/tutorials", (req, res) => {
  res.json({ message: "List of tutorials" });
});

app.post("/api/tutorials", (req, res) => {
  const { title } = req.body;
  res.json({ message: `Tutorial '${title}' created!` });
});

// Health check
app.get("/health", (req, res) => res.send("OK"));

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
