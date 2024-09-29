const express = require('express');
const mysql = require("mysql");
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors');

const salt = 10;
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors({
  // origin: ["http://localhost:8000"],
  origin: ["http://192.168.0.106:3000"],
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



// const express = require('express')
// const path = require('path')
// const cookieParser = require('cookie-parser')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// require('dotenv').config()

// const app = express()
// const PORT = 8000

// //Middlewares
// app.use(express.json())
// app.use(express.urlencoded({ extended: 'false' }))
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cookieParser())

// // Serve the React JS application from the src folder
// app.use(express.static(path.join(__dirname, 'src')));

// //routes
// app.get('/', (req, res) => {
//     res.cookie("token", "")
//     res.sendFile(path.join(__dirname, 'src', 'login.jsx'))
// })

// app.get('/register', (req, res) => {
//     res.sendFile(path.join(__dirname, 'src', 'signup.jsx'))
// })

// app.get('/location', isloggedin, (req, res) => {
//     res.sendFile(path.join(__dirname, 'src', 'location.jsx'))
// })

// app.post('/createuser', (req, res) => {
//     try {
//         const { name, email, password } = req.body
//         if (!name, !email, !password) {
//             res.send("Fill all the fields!")
//             res.redirect('/register')
//         }
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(password, salt, async (err, hash) => {
//                 let user = await createUser(name, email, hash)
//                 let token = jwt.sign({ email: email }, process.env.SECRETKEY)
//                 res.cookie("token", token)
//                 res.redirect("/location")
//             });
//         });
//     } catch (err) {
//         res.status(500).send('Error creating user')
//     }
// })

// app.post('/login', async (req, res) => {
//     let user = await getUser(req.body.email)
//     if (!user) { res.send("Email or password is incorrect") }
//     if (user) {
//         bcrypt.compare(req.body.password, user.password, function (err, result) {
//             if (result) {
//                 let token = jwt.sign({ email: user.email }, process.env.SECRETKEY)
//                 res.cookie("token", token)
//                 res.redirect("/location")
//             }
//             else res.send("Email or password is incorrect")
//         });
//     }
// })

// function isloggedin(req, res, next) {
//     if (!req.cookies.token) {
//         res.redirect('/login')
//     } else {
//         let data = jwt.verify(req.cookies.token, process.env.SECRETKEY)
//         req.user = data
//         next()
//     }
// }

// // Mock database functions
// async function createUser(name, email, password) {
//     // Replace with actual database logic
//     return { name, email, password }
// }

// async function getUser(email) {
//     // Replace with actual database logic
//     return { email, password: 'hashedpassword' }
// }

// app.listen(PORT, () => { console.log("server connected", PORT) })