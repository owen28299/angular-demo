'use strict';

const express     = require('express'),
      app         = express(),
      PORT        = process.env.PORT || 3000,
      moviesRoute = require('./routes/movies')
      ;

app.use(express.static('public'));
app.use("/api/movies", moviesRoute);

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
              {
                root  : __dirname
              });
});

app.listen(PORT, function(){
  console.log(`server listening on ${PORT}`);
});