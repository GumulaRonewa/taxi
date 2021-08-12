const router = require('express').Router();
let routes = require('../models/routes');
router.route('/add').post((req, res) => {
  const Province = req.body.Province;
  const City=req.body.City;
  const from=req.body.from;
  const to=req.body.to;
  const price=req.body.price;
  const newroute = new routes({Province,City,from,to,price});
  newroute.save()
    .then(() => res.status(200).json("added"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').post((req, res) => {
  routes.find({from:req.body.from,to:req.body.to})
      .then(route => res.json(route))
      .catch(err => console.log("Error")); 
});
router.route('/').get((req, res) => {
  routes.find()
  .then(route => res.json(route))
});
module.exports = router;
