// 2. bcrypt kibhabe use korte hoy password encryption and decryption er jonno
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

// why bcrypt: password ke onno kichu hishebe likhe rakhbe. for this we can use 256 algo. password ke ekta string e convert korte bcrypt use hoy.

// using bcrypt for encription
app.get("/", function (req, res) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("myPassword", salt, function (err, hash) {
      console.log(hash);
    });
  });
});

// using bcrypt for decription 
app.get('/',function(res,req){
    bcrypt.compare('myPassword',"$2b$10$8na3dBenANR8B4nd.NE6Uudc1/C9vShgAHeHXP0ixevq57kc/YfsW",function(err,result){
        console.log(result)
    })
})

app.get("/read", function (req, res) {
  res.send("read page");
});

app.listen(3000);