# Startup project for Twilio API

[![Run with Postverta badge](http://postverta.io/badge.svg)](http://postverta.io/direct/postverta/twilio-start)

The project shows you how to build a simple voice and SMS service with Twilio API.

## To run the app

First, register a Twilio trial account (free) at [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio).

Next, go to the phone number configuration at [https://www.twilio.com/console/phone-numbers/incoming](https://www.twilio.com/console/phone-numbers/incoming). Request
for an incoming phone number, and configure its voice and messaging webhook URLs as `http://app-name.app.postverta.io/call` and `http://app-name.app.postverta.io/message`,
respectively. `app-name` is your application's name on Postverta. See the following example:

![Twilio configuration example](https://i.imgur.com/E5bmJXJ.png)

Now, try to call and message your Twilio phone number, and see what happened.
You can also open console on Postverta to see the app log.
