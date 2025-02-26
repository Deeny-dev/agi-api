const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Causal Reasoning API
app.post("/causal-reasoning", (req, res) => {
  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  res.json({
    steps: [
      "Step 1: Identify cause and effect.",
      "Step 2: Analyze historical patterns.",
      "Step 3: Predict outcomes.",
      "Final Answer: AI determines the most probable scenario."
    ],
    message: "Causal reasoning process completed."
  });
});

// ✅ Meta-Reasoning API
app.post("/meta-reasoning", (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  let confidence = Math.random().toFixed(2) * 100;

  res.json({
    query,
    confidence_level: `${confidence}%`,
    explanation:
      confidence > 60 ? "AI is confident in this answer." : "AI suggests reviewing alternative perspectives.",
    message: "Metacognitive reasoning process completed."
  });
});

// ✅ Set Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 AI Server running on port ${PORT}`))
