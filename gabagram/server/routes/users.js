var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

/* GET users listing. */
router.route('/')
  .get(controller.index)
  .post(controller.create)


module.exports = router;
