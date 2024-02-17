// Import necessary modules
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const { resolve } = require("path");

require("dotenv").config();

const middlewares = require("./middlewares");

// Create a new SQLite database connection
const db = new sqlite3.Database(
  resolve(__dirname, "../bin/pocketbase/pb_data/data.db")
);

// Initialize Express app
const app = express();

// Middleware setup
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

// Products Routes

app.get("/products", (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      console.log("Error running sql: " + err);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: "List of products", data: rows });
  });
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
      if (err) {
        console.log("Error running sql: " + err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      res.json({ message: "Product details", data: row });
    });
  } else {
    db.all("SELECT * FROM products", (err, rows) => {
      if (err) {
        console.log("Error running sql: " + err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      res.json({ message: "List of products", data: rows });
    });
  }
});

app.post("/products", (req, res) => {
  const { name, price } = req.body;

  db.run("INSERT INTO products (name, price) VALUES (?, ?)", [name, price], function (err) {
    if (err) {
      console.log(`Error running sql: ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: `Product ${this.lastID} added` });
  });
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  db.run("UPDATE products SET name = ?, price = ? WHERE id = ?", [name, price, id], (err) => {
    if (err) {
      console.log(`Error running sql: ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: `Product ${id} updated` });
  });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(`Error running sql: ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: `Product ${id} deleted` });
  });
});

// Students Routes

app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      console.log("Error running sql: " + err);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: "List of students", data: rows });
  });
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    db.get("SELECT * FROM students WHERE id = ?", [id], (err, row) => {
      if (err) {
        console.log("Error running sql: " + err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      res.json({ message: "Student details", data: row });
    });
  } else {
    db.all("SELECT * FROM students", (err, rows) => {
      if (err) {
        console.log("Error running sql: " + err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      res.json({ message: "List of students", data: rows });
    });
  }
});

app.post("/students", (req, res) => {
  const { name, age } = req.body;

  db.run("INSERT INTO students (name, age) VALUES (?, ?)", [name, age], function (err) {
    if (err) {
      console.log(`Error running sql: ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: `Student ${this.lastID} added` });
  });
});

app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  db.run("UPDATE students SET name = ?, age = ? WHERE id = ?", [name, age, id], (err) => {
    if (err) {
      console.log(`Error running sql: ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: `Student ${id} updated` });
  });
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM students WHERE id = ?", [id], (err) => {
    if (err) {
      console.log(`Error running sql: ${err}`);
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }

    res.json({ message: `Student ${id} deleted` });
  });
});

// Error handling middleware
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
