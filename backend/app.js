const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);


app.use(cors());
app.use(express.json());

// Only this route needed
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/yourdbname', {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => { res.send('API is running'); });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); });
app.listen(PORT, () => { console.log("connected"); });
