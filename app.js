// Minimal Express app to store course enrollments in a flat file
const express = require('express');
const path = require('path');
const app = express();

// Serve static files (for your HTML/CSS/JS)
app.use(express.static(path.join(__dirname)));

// Use the course enrollment router
const courseEnrollRouter = require('./save-course-enroll');
app.use(courseEnrollRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
