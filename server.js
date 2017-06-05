'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let Emailer = require('emailer-js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let router = express.Router();
let path = __dirname + '/views/';

router.use((req, res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req, res) => {
  res.sendFile(path + 'index.html');
});

router.get('/send-email', (req, res) => {
  res.sendFile(path + 'send-email.html');
});

router.post('/send-email', (req, res) => {

  // Get data from email form and then send email
  let options = {
    fromEmail: req.body.from,
    toEmail: req.body.to,
    subject: req.body.subject,
    content: req.body.content
  };

  let emailer = new Emailer();
  emailer.sendEmail(options).then(val => {
    res.send(200, 'succeeded');
  }, err => {
    res.send(200, 'failed');
  });

});

app.use('/', router);

app.use('*', (req, res) => {
  res.sendFile(path + '404.html');
});

let server = app.listen(3000, () => {
  console.log('Live at Port 3000');
});

module.exports = server;
