const connectToMongoose=require('./db');
const express = require('express')
var cors = require('cors')
const app = express();
app.use(cors())
connectToMongoose();
const port = 5000;
app.use(express.json())
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/property',require('./Routes/property'));

app.listen(port, () => {
  console.log(`Homes & Horizons Backend listening on port at http://localhost:${port}`)
})


