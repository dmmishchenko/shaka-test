const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the src/assets directory
app.use('/assets', (req, res, next) => {
    // Set CORS headers
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    // Set correct MIME types
    if (req.path.endsWith('.m3u8')) {
        res.set('Content-Type', 'application/x-mpegURL');
    } else if (req.path.endsWith('.mpd')) {
        res.set('Content-Type', 'application/dash+xml');
    }
    next();
}, express.static(path.join(__dirname, 'src/assets')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 