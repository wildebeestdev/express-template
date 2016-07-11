var optimize = require('../lib/optimize-images');

module.exports = {

  index: function(req, res) {

  },
  show: function(req, res) {

  },
  create: function(req, res) {

    var images = optimize(req.body.imageUrl);

    res.send(images);

  },
  update: function(req, res) {

  },
  destroy: function(req, res) {

  }
};