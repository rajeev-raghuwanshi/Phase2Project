import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import env from "dotenv";
const app = express();
const port = 3000; //!server port
env.config();
const saltRounds = 10;
//!DATBASE DETAILS
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();
//!defining session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

const API_URL = "http://localhost:4000"; //!vlogging section reated api call
//TODO-->MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//TODO-->ROUTES TO HANDLE HOME SECTION
app.get("/home", (req, res) => {
  res.render("home.ejs");
});
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//TODO--->ROUTES TO HANDLE QUIZESZ
app.get("/allquiz", async (req, res) => {
  res.render("quizes.ejs");
});

app.get("/partquiz/:id", async (req, res) => {
  const id = req.params.id;
  res.render("part-quizes.ejs", { id });
});
app.get("/api/questions", async (req, res) => {
  const category = Number(req.query.category); // Get the category from the query parameter
  try {
    const questions = await db.query(
      "SELECT * FROM quiz_questions WHERE part_number=$1 ORDER BY RANDOM()",
      [category]
    );

    res.json({ questions: questions.rows });
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/questions/:id", async (req, res) => {
  const category = req.params.id;
  try {
    const questions = await db.query(
      "SELECT * FROM quiz_questions WHERE part_number=$1 ORDER BY RANDOM()",
      [category]
    );

    res.json({ questions: questions.rows });
  } catch (error) {
    console.log(error);
  }
});

//TODO-->>ROUTES TO HANDLE THE LEARN HOME PAGE
app.get("/learnhome", (req, res) => {
  res.render("learnhome.ejs");
});
app.get("/theory/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await db.query("SELECT * FROM Articles WHERE part_id=$1", [
      id,
    ]); //!GETTING ARTICLES
    const header = await db.query("SELECT * FROM Parts WHERE part_id=$1", [id]); //!GETTING PART INFO
    const articles = result.rows;
    const title = header.rows[0];
    res.render("parttheory.ejs", { articles, id, title });
  } catch (error) {
    console.log(error);
  }
});

//TODO-->ROUTES TO HANDLE BLOG SECTION

//! Route to render the main page
app.get("/blogs", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(response.data);
    res.render("blogging.ejs", { posts: response.data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

//! Route to render the edit page
app.get("/newpost", (req, res) => {
  res.render("modifyvlog.ejs", { heading: "New Post", submit: "Create Post" });
});
//!ROUTE TO EDIT THE POST
app.get("/editpost/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${req.params.id}`);
    // console.log(response.data);
    res.render("modify.ejs", {
      heading: "Edit Post",
      submit: "Update Post",
      post: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
});

//! Create a new post
app.post("/api/addposts", async (req, res) => {
  try {
    const userCheck = await db.query("SELECT * FROM users WHERE email = $1", [
      req.body.email,
    ]);
    if (userCheck.rows.length === 0) {
      return res.redirect("/login");
    }

    const response = await axios.post(`${API_URL}/posts`, req.body);

    // Check the response from the API
    if (response.status === 201) {
      // Successfully created post
      return res.redirect("/blogs");
    } else {
      // Handle other status codes if needed
      return res
        .status(response.status)
        .json({ message: "Error creating post" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating post" });
  }
});

//! Partially update a post
app.patch("/api/posts/:id", async (req, res) => {
  try {
    const response = await axios.patch(
      `${API_URL}/posts/${req.params.id}`,
      req.body
    );
    console.log(response.data);
    res.redirect("/blogs");
  } catch (error) {
    res.status(500).json({ message: "Error updating post" });
  }
});

//! Delete a post
app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    // Sending a DELETE request to the API that handles deletion
    await axios.delete(`${API_URL}/posts/${req.params.id}`);

    res.redirect("/blogs"); // After deletion, redirect to the blogs page
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
});

//TODO--->Authentication ROUTE HANDLERS
app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});
//!local login
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/register");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/home");
    });
  })(req, res, next);
});
//!register
app.post("/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      return res.redirect("/login");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            if (err) {
              return res.status(500).send("Login failed.");
            }
            res.redirect("/home");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

//! Google OAuth Strategy
app.get(
  "/auth/google/login",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
app.get(
  "/auth/google/home",
  passport.authenticate("google", {
    successRedirect: "/home",
    failureRedirect: "/login",
  })
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/home",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);

        if (result.rows.length === 0) {
          const newUser = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, "google"]
          );
          return done(null, newUser.rows[0]);
        } else {
          return done(null, result.rows[0]);
        }
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);
//!local  srategy
passport.use(
  "local",
  new Strategy(async function verify(username, password, cb) {
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            console.error("Error comparing passwords:", err);
            return cb(err);
          } else {
            if (valid) {
              return cb(null, user);
            } else {
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

//TODO--->DEBATE SECTION
app.get("/debate", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM debates;"); // Adjust the query to fit your database schema
    const debates = result.rows; // Assuming your result contains a 'rows' property with the data
    res.render("Debatesection.ejs", { debates }); // Pass the debates array to the EJS template
  } catch (error) {
    console.error("Error fetching debates:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/debatecreate",async(req,res)=>{
  res.render("debatecreation.ejs")
})
app.post("/debatecreate", async (req, res) => {
  const { topic, hostname, hostemail, meetlink, platform, mode, dateofdebate } =
    req.body;
  try {
    const result = db.query(
      "INSERT INTO debates (host_name,debate_date,debate_topic,meeting_link,platform,mode,host_email) VALUES($1,$2,$3,$4,$5,$6,$7)",
      [hostname, dateofdebate, topic, meetlink, platform, mode,hostemail]
    );
    res.redirect("/dbsuccess");
  } catch (err) {
    console.log(err);
  }
 
});
app.get("/dbsuccess",(req,res)=>{
  res.render("debatesucces.ejs")
})

//TODO--->ARTICLE HANDLING
app.get("/articles",(req,res)=>{
  res.render("article.ejs")
})

//TODO---->LEADERBOAR 
app.get("/leaderboard",(req,res)=>{
  res.render("leaderboard.ejs")
})

//TODO--->MAIN SERVER RUNNING
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
