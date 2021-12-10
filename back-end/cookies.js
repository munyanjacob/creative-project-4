const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();

const multer = require('multer')
const upload = multer({
    dest: '../front-end/public/images/',
    limits: {
        fileSize: 50000000
    }
});

const cookieSchema = new mongoose.Schema({
    path: String,
    name: String,
    title: String,
    description: String,
    rating: Number
});

const Cookie = mongoose.model('Cookie', cookieSchema);


router.post('/', upload.single('photo'), async (req, res) => {
    console.log("in backend's upload photo");
    if (!req.file)
        return res.status(400).send({
            message: "Must upload a file."
        });

    if (!req.body.title || !req.body.name || !req.body.description)
        return res.status(400).send({
            message: "missing a field"
        });
    try {
        const existingCookie = await Cookie.findOne({
            title: req.body.title
        });
        if (existingCookie)
            return res.status(403).send({
                message: "cookie with that name already exists"
            });

        const cookie = new Cookie({
            path: "/images/" + req.file.filename,
            name: req.body.name,
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating,
        });
        await cookie.save();

        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.get("/", async (req, res) => {
    //get all cookies
    try {
        let cookies = await Cookie.find().sort({
            rating: -1
        });
        return res.send(cookies);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.get("/best", async (req, res) => {
    //get all cookies
    try {
        let cookies = await Cookie.find().sort({
            rating: -1
        }).limit(1);
        return res.send(cookies);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});



module.exports = {
    routes: router,
    model: Cookie
};