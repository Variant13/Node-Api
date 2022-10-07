const express = require('express');
const router = express.Router();
const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        console.log(docs);
        if (!err) res.send(docs);
        else console.log("Error to get the data :" + err);
    })
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error creating new data object :' + err);
    })
})

module.exports = router