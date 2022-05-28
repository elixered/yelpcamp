const express = require('express');
const Campground = require('./models/campground');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yelp-camp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => {
        console.log('mongo connected!');
    })
    .catch((err) => {
        console.log('mongo error!', err);
    });

const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: 'my backyard', description: 'cheap camping' });
    await camp.save();
    res.send(camp);
})

app.listen(3000, () => {
    console.log('serving on port 3000');
})