// // ExpressJs Framework
// // Introduction to Expressjs
// // Setting up a basic Express application
// // Routing
// // Middleware
// // Request and respond handling
// // Error handling

// // MERN stack
// // Introduction to Expressjs
// // it's a npm package, which is a framework.
// // framework vs library: je technology bolbe je kon jinish ta kibhabe korte hobe , kajer ekta flow dibe oita ekta framework. r jeta kichu tools diye diye, tumi egula use korte parba oita library. That's why ExpressJS ekta frameWork.
// // expressJS manages everything from receieving the request and giving the response

// // Setting up a basic Express application

// const express = require("express");
// const app = express();

// // make routing
// // app.get(route, requestHandler)
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });
// app.get("/profile", function (req, res) {
//     res.send("This is me");
//   });

// // make server
// app.listen(3000);

// // npm install nodemon -g
// // nodemon Script.js, eta chile cholbe, na cholle npx nodemon script.js

// // middleWare
// // request ashar por route ke chalanor age kichu ekta perform kora , etai middleware.
const express = require("express");
const app = express();

// ekhane joto request ashbe, sobar age app.use cholbe
app.use(function (req, res, next) {
  console.log("middlewarechalao");
  next();
});

app.get("/", function (req, res) {
  res.send("middleware discussion");
});


// response and request handling
// frontend-backend-frontend

// Error handling
app.get("/profile", function (req, res, next) {
  return next(new Error("something went wrong"));
});
app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something broke");
});

app.listen(3000);
