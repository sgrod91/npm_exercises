var express = require('express');
var socketIo = require('socket.io');
var marked = require('marked');
var _ = require('lodash');
// var core = require('lodash/core');
// var fp = require('lodash/fp');
// var array = require('lodash/array');
// // var object = require('lodash/fp/object');
// // var at = require('lodash/fp');
// // var curryN = require('lodash/fp/currN');
var request = require('request');
request('http://www.google.com', function(error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body', body);
});

console.log(marked('I am using __markdown__'));

console.log(_.shuffle([1, 2, 3, 4]));
console.log(_.sum([4, 2, 8, 6]));
console.log(_.max([4, 2, 8, 6]));
console.log(_.mean([4, 2, 8, 6]));
