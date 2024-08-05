const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Node.js application!" });
});

app.get('/demo', (req, res) => {
    res.json({ message: "At demo end point!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
