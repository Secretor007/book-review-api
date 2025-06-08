const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const auth = require("../middleware/auth");

router.post("/books", auth, bookController.addBook);
router.get("/books", bookController.getBooks);
router.get("/books/:id", bookController.getBookDetails);
router.get("/search", bookController.searchBooks);

module.exports = router;
