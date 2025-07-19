const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static('.'));

// Handle root route and fallback to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle 404s by serving index.html (for SPAs)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
  console.log('Serving files from: ' + __dirname);
});