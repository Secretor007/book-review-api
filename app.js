require("dotenv").config();

const express = require("express");
const connectDb = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(express.json());

connectDb();

app.use("/api", authRoutes);
app.use("/api", bookRoutes);
app.use("/api", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
