var express = require('express');
var appController = require('../controllers/app-controller');

var router = express.Router();

router.route('/')
  .get(appController.index)
  .post(appController.create);

router.route('/:id')
  .get(appController.show)
  .put(appController.update)
  .delete(appController.destroy);

module.exports = router;