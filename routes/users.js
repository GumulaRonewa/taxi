const router = require('express').Router();
let user = require('../models/user');


router.route('/user/:email').get((req, res) => {
    var sub=req.param("email");
    var id=sub.substring(7,sub.length);
    var Email=id.toLowerCase();
    console.log(Email);
     user.find({email:Email})
    .then(users =>res.json(users))
    .catch(err => console.log("Error"));  
  
});

router.route('/add').post((req, res) => {
  const email =req.body.email;
  const password= req.body.password;
  const newUser = new user({email,password});
 console.log(email);
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
