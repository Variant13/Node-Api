const bodyParser = require('body-parser');//
const express = require('express');//
const app = express();//
require('./models/dbconfig');//
const postsRoutes = require('./routes/postsController');//
const mongoose = require('mongoose');//
const cors = require('cors');//
const { application } = require('express');
//mongoose.set("useFindAndModify", false);//
mongoose.connect('mongodb://localhost:27017/update').then(() => {
    console.log("...");
  });
app.use(bodyParser.json());// c'est un mildeware apres installation du body-parser
app.use('/posts', postsRoutes);// c'est un mildeware
app.use(cors());

app.listen(80, () => console.log('Server started:80'));
