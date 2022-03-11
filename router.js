const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index.ejs');
})
router.get('/about', (req, res, next) => {
    res.render('about.ejs', {
        pageTitle: 'about'
    });
})
router.get('/images', (req, res, next) => {
    res.render('images.ejs', {
        pageTitle: 'images'
    });
})
router.get('/story', (req, res, next) => {
    res.render('story.ejs', {
        pageTitle: 'story'
    });
})
router.get('/clips', (req, res, next) => {
    res.render('clips.ejs', { pageTitle: 'clips' });
})
router.get('/chapter1', (req, res, next) => {
    res.render('chapter1.ejs', { pageTitle: 'chapter1 and 2' });
})
router.get('/chapter2', (req, res, next) => {
    res.render('chapter2.ejs', { pageTitle: 'chapter3' })
})
router.get('/chapter3', (req, res, next) => {
    res.render('chapter3.ejs', { pageTitle: 'chapter4' })
})
router.get('/chapter4', (req, res, next) => {
    res.render('chapter4.ejs', { pageTitle: 'chapter5' })
})
router.get('/chapter5', (req, res, next) => {
    res.render('chapter5.ejs', { pageTitle: 'chapter 6 and 7' })
})
module.exports = router;