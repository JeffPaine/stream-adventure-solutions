var split = require('split');
var through = require('through');

var count = 1;
var tr = through(function (buf){
    if (count % 2 === 0){
      this.queue(buf.toString().toUpperCase() + '\n');
    } else {
      this.queue(buf.toString().toLowerCase() + '\n');
    }
    count += 1;
  });

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
