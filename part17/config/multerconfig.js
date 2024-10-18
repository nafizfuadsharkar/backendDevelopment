const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
// diskstorage setup 
// exports upload variable

// copy the diskstorage part from npm multer website and modify 

// diskstorage setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
    //   name create 
        crypto.randomBytes(12,function(err,name){
            const fn = name.toString('hex')+ path.extname(file.originalname);
            cb(null, fn)
        })
      
    }
  })
  
  const upload = multer({ storage: storage })
  module.exports = upload;