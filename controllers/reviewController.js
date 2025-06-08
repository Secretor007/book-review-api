const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = new Review({
      bookId: req.params.id,
      userId: req.user.userId,
      rating,
      comment,
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: "You can only review once per book" });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.json(review);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const result = await Review.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!result) return res.status(404).json({ error: "Review not found" });
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
