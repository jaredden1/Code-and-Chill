var express = require('express');
var router = express.Router();

const foodsCtrl = require("../controllers/foods")

/* GET users listing. */
router.get('/', foodsCtrl.index);
router.get('/new', foodsCtrl.new)
router.get('/:id', foodsCtrl.show)
router.post('/', foodsCtrl.create)

module.exports = router;
