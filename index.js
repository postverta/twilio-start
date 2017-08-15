const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const VoiceResponse = require('twilio').twiml.VoiceResponse;

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))

app.post('/message', function (req, res) {
  console.log('Message from:', req.body.From);
  console.log('Content:', req.body.Body);
  
  const response = new MessagingResponse();
  const message = response.message();
  message.body('Hello ' + req.body.From);
  res.send(response.toString());
});

app.post('/call', function (req, res) {
  console.log('Call from:', req.body.From);
  
  const response = new VoiceResponse();
  response.say('Hello Postverta');
  res.send(response.toString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
