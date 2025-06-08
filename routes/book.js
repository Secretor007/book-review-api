const express = require("express");
const router = express.Router();
const Book = require("../models/Book"); // adjust path to your Book model

// GET /search?query=some-text
router.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    if (!query)
      return res.status(400).json({ message: "Query parameter is required" });

    const regex = new RegExp(query, "i"); // 'i' for case-insensitive

    const books = await Book.find({
      $or: [{ title: regex }, { author: regex }],
    });

    res.json({ results: books });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
