// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Route to handle webhook notifications
app.post('/webhook', (req, res) => {
    const eventData = req.body; // This will contain data sent by the webhook

    // Process the webhook data, e.g., update the React component
    console.log('Received webhook data:', eventData);

    // Send a response indicating successful processing
    res.status(200).send('Webhook received and processed successfully.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
