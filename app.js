// const express = require('express')
// const app = express();
const dotenv = require('dotenv')
dotenv.config();

const twilio = require('twilio')

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const fromNumber = 'whatsapp:+14155238886';

const client = twilio(accountSid, authToken)

client.messages
    .create({
        from: fromNumber,
        to: 'whatsapp:+919449526238',
        body: 'You\'re such a loser',
    })
    .then((message) => console.log('Message Sent! SID:', message.sid))
    .catch((error) => console.error('Error:', error));