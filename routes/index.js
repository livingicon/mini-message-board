var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

// need router.post for new because the form submit buttons sends a post request
router.post('/new', (req, res) => {
  // accessing info from the form
  const {message, user} = req.body;
  // push it to the array
  messages.push({ text: message, user: user, added: new Date() });
  // send users back to the index page after submitting message
  res.redirect('/');
});


module.exports = router;
