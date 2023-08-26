const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT environment variable or default to 3000

app.use(bodyParser.json());

app.post('/', (req, res) => {
    const webhookData = req.body; // JSON data from TradingView

    // Process the webhookData here as needed
    console.log('Received webhook data:', webhookData);

    res.status(200).send('Webhook data received successfully.');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
