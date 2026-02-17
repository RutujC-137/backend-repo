require('dotenv').config();
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

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Backend is running',
    port: process.env.PORT || 4000,
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
    { id: 3, name: 'Bob Johnson', role: 'Manager' }
  ]);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple authentication (In production, use proper password hashing!)
  if (username === 'admin' && password === 'admin123') {
    res.json({ 
      success: true, 
      message: 'Login successful',
      environment: process.env.NODE_ENV
    });
  } else {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid credentials' 
    });
  }
});

// Environment info endpoint (for debugging only - remove in production!)
app.get('/api/env', (req, res) => {
  res.json({
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    corsOrigin: process.env.CORS_ORIGIN,
    hasJwtSecret: !!process.env.JWT_SECRET,
    hasDbUri: !!process.env.MONGODB_URI
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`CORS Origin: ${process.env.CORS_ORIGIN || '*'}`);
});
