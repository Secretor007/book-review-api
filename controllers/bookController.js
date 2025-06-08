const Book = require("../models/Book");
const Review = require("../models/Review");

exports.addBook = async (req, res) => {
  try {
    const book = new Book({ ...req.body, createdBy: req.user.userId });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: "Book creation failed" });
  }
};

exports.getBooks = async (req, res) => {
  const { author, genre, page = 1, limit = 5 } = req.query;
  const query = {};
  if (author) query.author = new RegExp(author, "i");
  if (genre) query.genre = genre;

  const books = await Book.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(books);
};

exports.getBookDetails = async (req, res) => {
  const book = await Book.findById(req.params.id);
  const reviews = await Review.find({ bookId: book._id });
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / (reviews.length || 1);

  res.json({ book, avgRating, reviews });
};

exports.searchBooks = async (req, res) => {
  const { query } = req.query;
  const books = await Book.find({
    $or: [
      { title: new RegExp(query, "i") },
      { author: new RegExp(query, "i") },
    ],
  });
  res.json(books);
};
