var express = require('express')
      ,http = require('http')
      ,path = require('path')
      ,app = express()
      ,fs = require('fs');
global.appRoot = path.resolve(__dirname);
var routes = require(appRoot+ '/lib/routes');

// database connection
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/mydb');

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});