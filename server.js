const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

let fastestTime = null;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the "files" directory
  app.use(express.static(path.join(__dirname, 'files')));

// Endpoint to handle reaction time recording
app.post('/record', (req, res) => {
    const { reactionTime } = req.body;
    if (fastestTime === null || reactionTime < fastestTime) {
        fastestTime = reactionTime;
    }
    res.json({ message: 'Time recorded', fastestTime });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
