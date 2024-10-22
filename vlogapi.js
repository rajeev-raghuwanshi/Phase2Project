import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

import env from "dotenv";
env.config();
//!DATBASE DETAILS
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

const app = express();
const port = 4000;

// In-memory data store

let lastId = 3;

//!Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//!GET all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await db.query("SELECT * FROM blogs");
    const result = posts.rows;

    res.json(result);
    // console.log(result);
  } catch (Error) {
    console.log(Error);
  }
});

//! GET a specific post by id
app.get("/posts/:email", async (req, res) => {
  const id = req.params.id;
  const post = await db.query("SELECT * FROM blogs WHERE ID=$1", [id]);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

//! POST a new post or add post
app.post("/posts", async (req, res) => {
  const { title, content, author, email } = req.body;
  try {
    // Check if the user exists in the users table
    const userCheck = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    
    if (userCheck.rows.length === 0) {
      return res.status(404).json({ message: "User does not exist. Please log in." });
    }

    // Proceed to insert the new post
    await db.query("INSERT INTO blogs (title, content, author, email) VALUES ($1, $2, $3, $4)", [
      title,
      content,
      author,
      email,
    ]);
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating post" });
  }
});

//! PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async (req, res) => {
  const post = await db.query("SELECT * FROM blogs WHERE id=$1", [
    req.params.id,
  ]);
  if (!post) return res.status(404).json({ message: "Post not found" });

  if (req.body.title) post.title = req.body.title;
  if (req.body.content) post.content = req.body.content;
  if (req.body.author) post.author = req.body.author;

  res.json(post);
});

//! DELETE a specific post by providing the post id
 app.delete("/posts/:id", async (req, res) => {
  try {
    // Deleting the post from the database
    await db.query("DELETE FROM blogs WHERE id = $1;", [req.params.id]);
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
