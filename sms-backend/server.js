require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID || 'AC6b0c51ff3338e8b8bd73e068d0065650';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'abea34c3a257591f4474ebd5f282c733';
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER || '+15344297512';
const ownerPhoneNumber = process.env.OWNER_PHONE_NUMBER || '+919922612132';

const client = twilio(accountSid, authToken);

app.post('/send-sms', async (req, res) => {
  const { name, contactNumber, address, items, totalAmount } = req.body;

  if (!name || !contactNumber || !address || !items || !totalAmount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  let messageBody = `New Order Placed:\nName: ${name}\nContact: ${contactNumber}\nAddress: ${address}\nItems:\n`;
  items.forEach(item => {
    messageBody += `- ${item.name} (₹${item.price.toFixed(2)})\n`;
  });
  messageBody += `Total Amount: ₹${totalAmount}`;

  try {
    const message = await client.messages.create({
      body: messageBody,
      from: twilioPhoneNumber,
      to: ownerPhoneNumber,
    });
    res.status(200).json({ success: true, sid: message.sid });
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).json({ error: 'Failed to send SMS' });
  }
});

app.listen(port, () => {
  console.log(`SMS backend server running on port ${port}`);
});
