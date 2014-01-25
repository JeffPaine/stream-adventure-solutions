var concat = require('concat-stream');

var ct = concat(function (data){
  console.log(data.toString().split('').reverse().join(''));
});

process.stdin
  .pipe(ct);
