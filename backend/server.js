const express = require('express');
const mysql = require("mysql");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors');

// import express from 'express' ;
// import mysql from 'mysql';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
// import cookieParser from 'cookie-parser';
const salt = 10;
// const saltRounds = 10;
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "userdata"
})


// app.get('/', (req, res) => {
//   res.send('Welcome to the Signup API');
// });

// app.post('/register', (req, res) => {
//   const sql = "INSERT INTO signup (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return res.json({ Error: "Error generating salt" });
//     }
//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//       if (err) {
//         return res.json({ Error: "Error hashing password" });
//       }
//       console.log("Hashed Password: ", hash);
//       const values = [
//         req.body.firstname,
//         req.body.lastname,
//         req.body.email,
//         hash
//       ]
//       db.query(sql, [values], (err, data) => {
//         if (err) return res.json({ Error: "Here Error inserting values" });
//         return res.json({ statusbar: "Successfully inserted data" });
//       })
//   });
// });
// });

app.post('/register', (req, res) => {
  const sql = "INSERT INTO signup (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) {
      return res.json({ Error: "Error hashing password" });
    }
    console.log("Hashed Password: ", hash);
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      hash
    ]
    db.query(sql, [values], (err, data) => {
      if (err) return res.json({ Error: "Here Error inserting values" });
      return res.json({ statusbar: "Successfully inserted data" });
    })

  });
});

app.post('/', (req, res) => {
  const sql = 'SELECT * FROM signup WHERE email = ?';  //cannot compare password as it is hashed
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Login error!" });
    if (data.length > 0) {
      bcrypt.compare(req.body.password.toString().trim(), data[0].password, (err, response) => {
        if (err) return res.json({ Error: "Password Not Compared" });
        if (response) {
          const name = data[0].name;
          const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
          res.cookie('token', token );
          return res.json({ statusbar: "Success Login"});
        }
        else {
          return res.json({ Error: "Password not matched!" })
        }
      })
    } else {
      return res.json({ Error: "EMAIL NOT MATCHED/Existed!" });
    }
  })
})

app.listen(PORT, () => {
  console.log("listening on port 8000");
});



// app.post('/', (req, res) => {
//   const sql = 'SELECT * FROM signup WHERE email = ?';
//   db.query(sql, [req.body.email], (err, data) => {
//     if (err) return res.json({ Error: "Login error!" });
//     if (data.length > 0) {
//       const storedHash = data[0].password;
//       const inputPassword = req.body.password.toString().trim(); // Trim the input password

//       console.log("Stored hash:", storedHash); // Log the stored hash
//       console.log("Input password:", inputPassword); // Log the input password

//       bcrypt.compare(inputPassword, storedHash, (err, response) => {
//         if (err) return res.json({ Error: "Password Not Compared" });
//         if (response) {
//           return res.json({ statusbar: "Password matched successfully from the database" });
//         } else {
//           return res.json({ Error: "Password not matched!" });
//         }
//       });
//     } else {
//       return res.json({ Error: "EMAIL NOT MATCHED!" });
//     }
//   });
// });





//   // Store user data in databases
// const userId = data.insertId;
// const user = { id: userId, ...values };
// db.query("INSERT INTO users SET ?", user, (err, data) => {
//   if (err) {
//     return res.json("Error");
//   }
//   res.json({ message: "User registered successfully" });
// });
