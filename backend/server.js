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

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdata"
})


app.get('/', (req, res) => {
    res.send('Welcome to the Signup API');
});

app.post('/register', (req, res) => {
  const sql = "INSERT INTO signup (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if(err){
      return res.json({
        Error: "Error hashing password"
      })
    };
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      hash
    ]
    db.query(sql, [values], (err, data) => {
      if (err) return res.json({Error: "Error inserting values"});
      return res.json({statusbar: "Successfully inserted data"});
  })
  //   // Store user data in database
    // const userId = data.insertId;
    // const user = { id: userId, ...values };
    // db.query("INSERT INTO users SET ?", user, (err, data) => {
    //   if (err) {
    //     return res.json("Error");
    //   }
    //   res.json({ message: "User registered successfully" });
    // });
  });
});

app.post('/', (req, res)) 


app.listen(PORT, () => {
    console.log("listening on port 8000");
});


// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const userModel = require('./models/user');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await userModel.findOne({ email });
//   if (!user) {
//     return res.status(401).send('Email or password is incorrect');
//   }
//   const isValid = await bcrypt.compare(password, user.password);
//   if (!isValid) {
//     return res.status(401).send('Email or password is incorrect');
//   }
//   const token = jwt.sign({ email: user.email, userid: user._id }, process.env.SECRETKEY);
//   res.json(token);
// });

// app.post('/createuser', async (req, res) => {
//   const { name, email, password } = req.body;
//   const user = new userModel({ name, email, password });
//   await user.save();
//   const token = jwt.sign({ email: user.email, userid: user._id }, process.env.SECRETKEY);
//   res.json(token);
// });

// app.listen(8000, () => console.log('Server started on port 8000'));




// app.post('/register', (req, res) => {
//     const sql = "INSERT INTO signup (`firstname`, `lastname`, `email`, `password`) VALUES (?)";
//     const values = [
//         req.body.firstname,
//         req.body.lastname,
//         req.body.email,
//         req.body.password
//     ];
//     db.query(sql, [values], (err, data) => {
//         if (err) {
//             return res.json("Error");
//         }
//         return res.json(data);
//     });
// });
