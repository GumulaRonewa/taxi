const router = require('express').Router();
let routes = require('../models/routes');
router.route('/add').post((req, res) => {
  const Province = req.body.Province;
  const City=req.body.City;
  const route=req.body.route;
  const price=req.body.price;
  const newpost = new routes({Province,City,route,price});
  console.log(req.body)
  newpost.save()
    .then(() => res.json("error"))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get((req, res) => {
  routes.find()
  .then(route => res.json(route))
});
module.exports = router;
