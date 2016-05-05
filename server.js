'use strict';

const express     = require('express'),
      app         = express(),
      PORT        = process.env.PORT || 3000,
      moviesRoute = require('./routes/movies')
      ;

app.use(express.static('public'));
app.use("/api/movies", moviesRoute);


app.listen(PORT, function(){
  console.log(`server listening on ${PORT}`);
});