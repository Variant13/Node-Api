const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbconfig');
const postsRoutes = require('./routes/postsController');

app.use(bodyParser.json());// c'est un mildeware apres installation du body-parser
app.use('/posts', postsRoutes);// c'est un mildeware
app.listen(80, () => console.log('Server started:80'));
