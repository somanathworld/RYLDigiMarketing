// Node.js/Express handler for saving course enrollments to a flat file
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const DATA_FILE = path.join(__dirname, 'course_enrollments.txt');

router.post('/save-course-enroll', express.json(), (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const line = `${new Date().toISOString()},${name},${email},${phone},${message || ''}\n`;
  fs.appendFile(DATA_FILE, line, err => {
    if (err) return res.status(500).json({ error: 'Failed to save data' });
    res.json({ success: true });
  });
});

module.exports = router;
