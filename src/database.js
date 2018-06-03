'USE STRICT';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err)
{
  if (err)
  {
    console.log("Failed to establish database connection.");
  }
  else
  {
  console.log("Connection to database established.");
  }
});
