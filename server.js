const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config').mongoURI;
const app = express();
const routes = require('./routes/index')

mongoose.connect(db,{ 
    useNewUrlParser: true,
    useCreateIndex: true
  }).then((rs) => {
    console.log(`MongoDB Terkoneksi`)
}).catch((err) => {console.log(err)})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/',routes);

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server berjalan di ${PORT}`)
});