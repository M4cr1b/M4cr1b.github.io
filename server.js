const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory database for demo purposes
let attendances = [];

// Handle form submissions
app.post('/submit-attendance', (req, res) => {
    const { name, id, course, date, time } = req.body;
    attendances.push({ name, id, course, date, time });
    res.status(200).json({ message: 'Attendance recorded successfully' });
});

// Get all attendances
app.get('/get-attendances', (req, res) => {
    res.json(attendances);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
