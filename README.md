
# 📚 Book Review API

A RESTful API for managing books and user reviews using **Node.js**, **Express**, **MongoDB**, and **JWT-based authentication**.

## 🔗 API Documentation

You can find the full API documentation here:  
📄 [Postman Collection](https://documenter.getpostman.com/view/35397934/2sB2x3nDbE)

---

## ⚙️ Setup Instructions

1. **Clone the repository**:

```
git clone https://github.com/your-username/book-review-api.git
cd book-review-api
```
2. **Install dependencies**:
 ```npm install```

3. **Create a .env file**:
```
    PORT=5000
    
    MONGODB_URI=mongodb://localhost:27017/bookreviews
    
    JWT_SECRET=your_jwt_secret
```
4. **Start server**:

  ```npm start```
  
The API will be running at:
  ```📍 http://localhost:5000/```
<br/>
<br/>
<br/>

📌**Design Decisions / Notes**
  Used MongoDB with Mongoose for easy document modeling.
    
  Each user can only review a book once (unique index on bookId + userId).
    
  Reviews and books are paginated to support scalability.
<br/>
<br/>
<br/>

🔐 Authentication
JWT-based authentication

Protected routes require a valid token in the Authorization header:

Bearer <your_token>
<br/>
<br/>
<br/>
📊 Database Schema

    User: { username, email, passwordHash }
    
    Book: { title, author, genre }
    
    Review: { bookId, userId, rating, comment }

