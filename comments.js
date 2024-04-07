// Create a web server that responds to a GET request to /comments with a JSON object.
// This JSON object should have a key comments and an array of strings as the value.

var express = require('express');
var app = express();

app.get('/comments', function(request, response){
  response.json({ comments: ['This is a comment', 'This is another comment'] });
});

app.listen(3000);
// Now, when you visit http://localhost:3000/comments in your browser, you should see the JSON object you created.

// Path: greeting.js
// Create a web server that responds to a GET request to /greeting with a friendly greeting.

var express = require('express');
var app = express();

app.get('/greeting', function(request, response){
  response.send('Hello, stranger!');
});

app.listen(3000);
// Now, when you visit http://localhost:3000/greeting in your browser, you should see the greeting you created.

// Path: favorite_foods.js
// Create a web server that responds to a GET request to /favorite_foods with a JSON object.
// This JSON object should have a key favoriteFoods and an array of strings as the value.

var express = require('express');
var app = express();

app.get('/favorite_foods', function(request, response){
  response.json({ favoriteFoods: ['pizza', 'tacos', 'ice cream'] });
});

app.listen(3000);
// Now, when you visit http://localhost:3000/favorite_foods in your browser, you should see the JSON object you created.

// Path: about.js
// Create a web server that responds to a GET request to /about with a JSON object.
// This JSON object should have a key about and a string as the value.

var express = require('express');
var app = express();

app.get('/about', function(request, response){
  response.json({ about: 'This is a JSON object about the about route.' });
});

app.listen(3000);
// Now, when you visit http://localhost:3000/about in your browser, you should see the JSON object you created.

// Path: index.js
// Create a web server that responds to a GET request to / with a JSON object.
// This JSON object should have a key message and a string as the value.

var express = require('express');
var app = express();

app.get('/', function(request, response){});