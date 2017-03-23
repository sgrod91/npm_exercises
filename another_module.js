var create_thumbnails = require('./create_thumbnails.js');
var filename = ".";

create_thumbnails(filename, function(err) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});
