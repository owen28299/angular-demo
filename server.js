'use strict';

const express = require('express'),
      app     = express(),
      PORT    = process.env.PORT || 3000
      ;

app.use(express.static('public'));



app.listen(PORT, function(){
  console.log(`server listening on ${PORT}`);
});