var tinify = require("tinify");
var images;
tinify.key = process.env.tinify_key;
var uuid = require('node-uuid');
var _ = require('lodash');

var newUrls = [];

function optimize(imageUrl) {

    var imageCount = imageUrl.length;
    // console.log('imageCount', imageCount);
    var counter = 0;
    _.map(imageUrl, function(url){
        // console.log('url', url);
        counter++;
        var newName = uuid.v4({
            random: [
                0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea,
                0x71, 0xb4, 0xef, 0xe1, 0x67, 0x1c, 0x58, 0x36
            ]
        });
        newUrls.push("http://804c28d8.ngrok.io/images/" + newName + counter + ".png");

        var source = tinify.fromUrl(url);
        source.toFile("./public/images/"+ newName  + counter +  ".png");

    });

    return newUrls;
}

module.exports = optimize;