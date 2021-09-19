const express = require('express');
const userRoute = require('./routes/User');

const app = express ();

app.use('/user', userRoute);

app.listen(3005, () => {
  console.log('server running on port 3005');
});
