// Load the correct .env file based on NODE_ENV
// NODE_ENV=dev   → loads .env.dev
// NODE_ENV=qa    → loads .env.qa
// NODE_ENV=preprod → loads .env.preprod
// NODE_ENV=prod  → loads .env.prod
const env = process.env.NODE_ENV || 'dev';
require('dotenv').config({ path: `.env.${env}` });
const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration using environment variable
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// ─── Routes ────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Backend is running',
    port: process.env.PORT || 4000,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Static users list (no database needed)
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe',    role: 'Admin'   },
    { id: 2, name: 'Jane Smith',  role: 'User'    },
    { id: 3, name: 'Bob Johnson', role: 'Manager' }
  ]);
});

// Login (hardcoded credentials — no database needed)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin123') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// ─── Start Server ──────────────────────────────────────────

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  console.log(`Environment : ${process.env.NODE_ENV || 'development'}`);
  console.log(`CORS Origin : ${process.env.CORS_ORIGIN || '*'}`);
});
